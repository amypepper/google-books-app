import React from "react";

import "./ResultsItem.css";

class ResultsItem extends React.Component {
  render() {
    return this.props.results.map((volume, i) => (
      <li key={i}>
        <h3>{volume.volumeInfo.title}</h3>

        {volume.volumeInfo.authors && volume.volumeInfo.authors.length && (
          <p>Author(s): {volume.volumeInfo.authors.join(", ")}</p>
        )}

        {volume.saleInfo.retailPrice && (
          <p>
            Price: {"$"}
            {volume.saleInfo.retailPrice.amount}
          </p>
        )}

        {volume.volumeInfo.description &&
          volume.volumeInfo.description.length && (
            <p className="volume-description">
              {volume.volumeInfo.description}
            </p>
          )}
        <div>
          {volume.volumeInfo.imageLinks && (
            <img
              alt={volume.volumeInfo.title}
              src={volume.volumeInfo.imageLinks.thumbnail}
            />
          )}
        </div>
      </li>
    ));
  }
}

export default ResultsItem;
