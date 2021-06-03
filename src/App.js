import React, { Component } from "react";
import Quote from "./components/quote";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">Random Quotes</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">A site that displays a random quote.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Quote />
          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3 m-4">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
