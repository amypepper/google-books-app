import React from "react";

import "./ResultsItem.css";

class ResultsItem extends React.Component {
  render() {
    return this.props.results.map((volume, i) => (
      <li key={i}>
        <h3>{volume.title}</h3>
        <p>{volume.authors.map((author) => author + ", ")}</p>
      </li>
    ));
  }
}

export default ResultsItem;
