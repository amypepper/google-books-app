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

// const sampleResults = {
//   kind: "books#volumes",
//   items: [
//     {
//       kind: "books#volume",
//       id: "_ojXNuzgHRcC",
//       etag: "OTD2tB19qn4",
//       selfLink: "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
//       volumeInfo: {
//         title: "Flowers",
//         authors: ["Vijaya Khisty Bodach"],
//       },
//     },
//     {
//       kind: "books#volume",
//       id: "RJxWIQOvoZUC",
//       etag: "NsxMT6kCCVs",
//       selfLink: "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
//       volumeInfo: {
//         title: "Flowers",
//         authors: ["Gail Saunders-Smith"],
//       },
//     },
//   ],
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumes: [],
      searchTerm: null,
      printType: null,
      bookType: null,
      results: null,
    };
  }

  componentDidMount() {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=shakespeare&AIzaSyDQu39PzvONYBE6akV0Qu9O-1CxlKr6SlA";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const volumes = data.items.map((volume) => volume.volumeInfo);
        this.setState({ volumes });
        console.log(volumes);
      });
  }

  render() {
    return (
      <div>
        <NavBar filterParams={booksAPI.params} />
        <main>
          <ResultsList results={this.state.volumes} />
        </main>
      </div>
    );
  }
}

export default App;
