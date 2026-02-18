import React from "react";
import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://127.0.0.1:8000/quote");
      const data = await response.json();
      console.log(data);
      setQuote(data);
    }
    getData();
  }, []);
  return <div>{quote.quote}</div>;
}

export default Quote;
