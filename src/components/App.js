import React from "react";
import SearchBar from "./SearchBar";
import "./mainStyle.css";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = async termFromUser => {
    //console.log(termFromUser);
    const response = await youtube.get("/search", {
      params: {
        q: termFromUser
      }
    });

    console.log(response);
  };
  render() {
    return (
      <div className="main-container">
        <h1>HeziTube</h1>
        <SearchBar whenTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
