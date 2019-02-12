import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({ term: e.target.value });
    console.log("g");
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.whenTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui massive icon input">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              onChange={this.onInputChange}
              value={this.state.term}
              type="text"
              placeholder="Search video..."
            />
          </div>
        </form>

        <i className="search icon" />
      </div>
    );
  }
}

export default SearchBar;
