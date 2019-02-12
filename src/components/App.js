import React from "react";
import SearchBar from "./SearchBar";
import "./mainStyle.css";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  //State, init with empty array
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async termFromUser => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromUser
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log("this is the video", video);
  };

  render() {
    return (
      <div className="ui container">
        <h1>HeziTube</h1>
        <SearchBar whenTermSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
