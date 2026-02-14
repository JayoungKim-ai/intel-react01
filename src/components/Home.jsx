import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/");

        // 응답이 성공인지 확인
        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 : ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setMessage(data);
      } catch (error) {
        console.log("에러 발생:", error.message); // Rejected 처리
        return null;
      }
    }
    getData();
  }, []);
  return <div>{message.message}</div>;
}

export default Home;
