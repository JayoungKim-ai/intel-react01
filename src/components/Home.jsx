import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://127.0.0.1:8000");
      const data = await response.json();
      setMessage(data);
    }
    getData();
  }, []);
  return <div>{message.message}</div>;
}

export default Home;
