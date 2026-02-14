import React from "react";
import { useState, useEffect } from "react";

function Festival() {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const url = `${import.meta.env.VITE_API_URL}/festival`;
        const response = await fetch(url);

        // 응답이 성공인지 확인
        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 : ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setFestivals(data);
      } catch (error) {
        console.log("에러 발생:", error.message); // Rejected 처리
        return null;
      }
    }
    getData();
  }, []);
  return (
    <div>
      {festivals.map((item, idx) => (
        <div key={idx}>{item.fstvlNm}</div>
      ))}
    </div>
  );
}

export default Festival;
