import React from "react";

import ResultsItem from "../ResultsItem/ResultsItem";
import "./ResultsList.css";

class ResultsList extends React.Component {
  render() {
    return resultsArr.map(() => {
      <ResultsItem />;
    });
  }
}

export default ResultsList;
