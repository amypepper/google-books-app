import React from "react";

import "./ResultsItem.css";

class ResultsItem extends React.Component {
  render() {
    return this.props.results.items.map((item, i) => (
      <li key={i}>
        <h3>{volume.title}</h3>
        <p>
          {volume.authors && volume.authors.length && volume.authors.join(", ")}
        </p>
      </li>
    ));
  }
}

export default ResultsItem;
