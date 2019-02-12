import React from "react";
import SearchBar from "./SearchBar";
import "./mainStyle.css";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  //State, init with empty array
  state = { videos: [] };

  onTermSubmit = async termFromUser => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromUser
      }
    });

    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <h1>HeziTube</h1>
        <SearchBar whenTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
