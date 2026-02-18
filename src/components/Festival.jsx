import React from "react";
import { useState, useEffect } from "react";

function Festival() {
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const url = `${import.meta.env.VITE_API_URL}/festivals`;
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
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);
  return (
    <>
      <div>{loading ? "데이터를 불러오는 중입니다." : ""}</div>
      <div>
        {festivals.map((item, idx) => (
          <div key={idx}>{item.fstvlNm}</div>
        ))}
      </div>
    </>
  );
}

export default Festival;
