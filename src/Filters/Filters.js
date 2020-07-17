import React from "react";

import "./Filters.css";

class Filters extends React.Component {
  render() {
    const printTypeOptions = this.props.filterParams.printTypes.map(
      (selection, i) => (
        <option value={selection} key={i}>
          {selection}
        </option>
      )
    );

    const bookTypeOptions = this.props.filterParams.bookTypes.map(
      (selection, i) => (
        <option value={selection} key={i}>
          {selection}
        </option>
      )
    );

    return (
      <fieldset className="filters">
        <label htmlFor="printType">Print Type:</label>
        <select id="printType" name="printType">
          <option value="None">Select one...</option>
          {printTypeOptions}
        </select>
        <label htmlFor="bookType">Book Type:</label>
        <select id="bookType" name="bookType">
          <option value="None">Select one...</option>
          {bookTypeOptions}
        </select>
      </fieldset>
    );
  }
}

export default Filters;
