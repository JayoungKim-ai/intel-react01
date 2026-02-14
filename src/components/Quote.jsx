import React from "react";
import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/quote");

        // 응답이 성공인지 확인
        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 : ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setQuote(data);
      } catch (error) {
        console.log("에러 발생:", error.message); // Rejected 처리
        return null;
      }
    }
    getData();
  }, []);
  return <div>{quote.quote}</div>;
}

export default Quote;
