import React from "react";
import SearchBar from "./SearchBar";
import "./mainStyle.css";

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>HeziTube</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
