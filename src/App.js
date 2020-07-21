import React from "react";

import "./App.css";
import NavBar from "./NavBar/NavBar";
import ResultsList from "./ResultsList/ResultsList";

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
      searchTerm: null,
      printType: null,
      bookType: null,
    };
  }

  componentDidMount() {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=shakespeare&{process.env.REACT_APP_API_KEY}";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const volumes = data.items.map((volume) => volume);

        this.setState({ volumes });
        console.log(volumes);
      });
  }

  render() {
    const volumes = this.state.volumes ? (
      <ResultsList results={this.state.volumes} />
    ) : (
      <div className="results_list__placeholder"></div>
    );
    return (
      <div>
        <NavBar filterParams={booksAPI.params} />
        <main>{volumes}</main>
      </div>
    );
  }
}
export default App;
