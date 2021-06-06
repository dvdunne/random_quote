import React, { Component } from "react";
import { randomNumber } from "../utils/random";
import { getQuote } from "./../services/quoteList";

class Quote extends Component {
  render() {
    const quoteId = Math.ceil(randomNumber(0, 5));
    const { quote, author } = getQuote(quoteId);

    return <div>{quote + " - " + author}</div>;
  }
}

export default Quote;
