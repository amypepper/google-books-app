import React from "react";

import "./App.css";

const booksAPI = {
  urls: [
    "https://www.googleapis.com/books/v1/{collectionName}/resourceID?parameters",
    "https://www.googleapis.com/books/v1/volumes?q=your-query-here&key=your-API-Key",
  ],
  params: [
    "filter=free-ebooks",
    "filter=partial",
    "filter=full",
    "filter=ebooks",
    "filter=paid-ebooks",
    "printType=all",
    "printType=magazines",
    "printType=books",
  ],
};

function App() {}

export default App;
