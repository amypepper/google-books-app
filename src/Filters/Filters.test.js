import React from "react";
import ReactDOM from "react-dom";
// import renderer from "react-test-renderer";
import Filters from "./Filters";

const booksAPI = {
  urls: [
    "https://www.googleapis.com/books/v1/{collectionName}/resourceID?parameters",
    "https://www.googleapis.com/books/v1/volumes?q=your-query-here&key=your-API-Key",
  ],
  params: {
    bookTypes: [
      "filter=free-ebooks",
      "filter=partial",
      "filter=full",
      "filter=ebooks",
      "filter=paid-ebooks",
    ],
    printTypes: ["printType=all", "printType=magazines", "printType=books"],
  },
};

it("renders without errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Filters filterParams={booksAPI.params} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
