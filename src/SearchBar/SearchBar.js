import React from "react";

import Filters from "../Filters/Filters";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <form>
          <fieldset className="search-text">
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search term here"
            />
          </fieldset>
          <Filters filterParams={this.props.filterParams} />
          <button type="submit">Search</button>
        </form>
      </section>
    );
  }
}

export default SearchBar;
