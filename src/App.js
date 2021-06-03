import React, { Component } from "react";
import Quote from "./components/quote";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="Container">
        <h1>Hello</h1>
        <Quote />
      </main>
    );
  }
}

export default App;
