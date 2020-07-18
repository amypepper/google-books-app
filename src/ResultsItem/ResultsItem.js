import React from "react";

import "./ResultsItem.css";

class ResultsItem extends React.Component {
  render() {
    return this.props.results.items.map((item) => (
      <li>
        {item.volumeInfo.title} by{" "}
        {item.volumeInfo.authors.map((author) => author)}
      </li>
    ));
  }
}

export default ResultsItem;
