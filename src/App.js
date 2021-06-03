import React, { Component } from "react";
import { getQuote } from "./components/quote";
import Quote from "./components/quote";
import "./App.css";

class App extends Component {
  render() {
    const refreshPage = () => {
      window.location.reload();
    };

    return (
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Random Quotes</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">A site that displays a random quote.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Quote />
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              onClick={refreshPage}
              type="button"
              className="btn btn-primary btn-sm px-4 gap-3 m-4"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
