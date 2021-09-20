import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* When calling onInputChange, if you put a set of parentheses it will call the function when the component is rendered. 
                DO NOT put on a set of parentheses whenever you pass a callback function to any even handler like so: onChange={this.onInputChange()}
            */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/*
Side Notes 

Event Handlers
  1. onClick can be used in just about any html element

Uncontrolled vs Controlled Elements

  1. When having an uncontrolled element you are storing information inside the DOM
    Example of Uncontrolled element:

      handleChange(e){
        console.log(e.target.value)
      }
      
      The input tag is storing the value. This is an uncontrolled element. Not something you want to do in react
      <input type="text" onChange={handleChange}/>
      

  2. When having a controlled element you are storing information inside the component in state. This is the preferred
     approach. 
    
    Example of Controlled element:

    state={term:''}

    <input type="text" value={this.state.term} onChange={(e) => {this.setState({ term: e.target.value })}}/>


Understanding the 'this' error when doing something like this:
  onFormSubmit(){
    console.log(this.state.term) //'this' is undefined
  }
  <form className="ui form" onSubmit={this.onFormSubmit}></form>

  'this' is undefined cause at some point in time when the form element calls onFormSubmit it removes the function from the SearchBar class 
  and calls it as if it was never set in the SearchBar class. So when wanting to access 'this' to get to onFormSubmit, 'this' is no longer defined 
  cause you can only use 'this' inside a class so that the class can know what 'this' is referring to. 
  See video 90 in Section 7:Handling user input with forms and events for refresher and detailed explanation.

  There are a few ways to fix this error. 
      1. You can use a constructor and bind the onFormSubmit to 'this' like so:
        constructor (){
          super(props)
          this.onFormSubmit = this.onFormSubmit.bind(this);
        }

      2. You can turn the onFormSubmit into a fat arrow functions like so:
        const onFormSubmit = () => {
          console.log(this.state.term)
        }

      3. You can pass a fat arrow function on the onSubmit property and call onFormSubmit() like so:
        <form onSubmit={() => onFormSubmit()}></form>
    
    These solutions will allow any method you create access to the keyword 'this'
*/
