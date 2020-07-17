import React from "react";

import "./App.css";
import NavBar from "./NavBar/NavBar";
import ResultsList from "./ResultsList/ResultsList";
import SearchBar from "./SearchBar/SearchBar";

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

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <div>{booksAPI.params}</div>
        <div>{booksAPI.urls}</div>
        <SearchBar />
        <ResultsList />
      </main>
    </div>
  );
}

export default App;
