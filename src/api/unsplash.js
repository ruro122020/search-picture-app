import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID efva5_rSEckzb5fCdhHQVtEgkEt3ojSUzbx93inDblM",
  },
});
