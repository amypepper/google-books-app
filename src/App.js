import React from "react";

import "./App.css";
import NavBar from "./NavBar/NavBar";
import ResultsList from "./ResultsList/ResultsList";

// const APIKEY = process.env.REACT_APP_API_KEY;
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumes: [],
      printType: null,
      bookType: null,
    };
  }

  handleSearch(searchResults) {
    this.setState({
      volumes: [...this.state.volumes, searchResults],
    });
  }

  render() {
    console.log("this is state.volumes: ", this.state.volumes);
    const volumes = this.state.volumes[0] ? (
      <ResultsList results={this.state.volumes} />
    ) : (
      <div className="results_list__placeholder"></div>
    );
    return (
      <div>
        <NavBar
          filterParams={booksAPI.params}
          handleSearch={(searchResults) => this.handleSearch(searchResults)}
        />
        <main>{volumes}</main>
      </div>
    );
  }
}
export default App;
