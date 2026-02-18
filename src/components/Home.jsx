import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`);
      const data = await response.json();
      setMessage(data);
    }
    getData();
  }, []);
  return <div>{message.message}</div>;
}

export default Home;
