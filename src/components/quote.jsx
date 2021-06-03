import React, { Component } from "react";
import { getQuote } from "../services/quoteList";
import { randomNumber } from "../utils/random";

class Quote extends Component {
  render() {
    const quoteId = Math.ceil(randomNumber(0, 5));
    console.log(quoteId);

    return <div>{getQuote(quoteId).quote}</div>;
  }
}

export default Quote;
