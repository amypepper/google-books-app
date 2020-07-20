import React from "react";
import ReactDOM from "react-dom";
// import renderer from "react-test-renderer";
import ResultsItem from "./ResultsItem";

const sampleResults = {
  kind: "books#volumes",
  items: [
    {
      kind: "books#volume",
      id: "_ojXNuzgHRcC",
      etag: "OTD2tB19qn4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
      volumeInfo: {
        title: "Flowers",
        authors: ["Vijaya Khisty Bodach"],
      },
    },
    {
      kind: "books#volume",
      id: "RJxWIQOvoZUC",
      etag: "NsxMT6kCCVs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
      volumeInfo: {
        title: "Flowers",
        authors: ["Gail Saunders-Smith"],
      },
    },
  ],
};

it("renders without errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResultsItem results={sampleResults} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
