import React from "react";

import ResultsItem from "../ResultsItem/ResultsItem";
import "./ResultsList.css";

class ResultsList extends React.Component {
  render() {
    return (
      <section>
        <h2>Results:</h2>
        <ul>
          <ResultsItem results={this.props.results} />
        </ul>
      </section>
    );
  }
}

export default ResultsList;
