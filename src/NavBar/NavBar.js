import React from "react";

import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <h1>Google Books App</h1>
        <SearchBar />
      </header>
    );
  }
}

export default NavBar;
