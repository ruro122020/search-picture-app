import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); // 10 is the number of px we set in the ImageList.css file in the grid-auto-rows css property

    this.setState({ spans: spans });
    //another way to write out the above code like so:
    //this.setState({spans})
    //since an identical key and value name are the same
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

/*
when consoling this.imageRef.current.clientHieght to get the height of the picture, it will print out 0.
The reason for that is cause at the moment componentDidMount is called, the image request hasn't been provided
by the api call yet so we are essentially asking for the height of the image to soon, before the image has been 
downloaded from unsplash. 
*/
