import React from "react";

import Filters from "../Filters/Filters";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.value}&${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          value: "",
        });
        const volumes = data.items.map((volume) => volume);
        this.props.handleSearch(volumes);
      });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="search-text">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search term here"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </fieldset>
        <Filters filterParams={this.props.filterParams} />
      </form>
    );
  }
}

export default SearchBar;
