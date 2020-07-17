import React from "react";

import Filters from "../Filters/Filters";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <section>
        <div>
          <form>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search term here"
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div>
          <Filters />
        </div>
      </section>
    );
  }
}

export default SearchBar;
