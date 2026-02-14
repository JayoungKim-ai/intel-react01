import React from "react";
import { useState, useEffect } from "react";

function Animal() {
  const [animal, setAnimal] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://intel-server-iqjy.onrender.com/animal",
        );

        // 응답이 성공인지 확인
        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 : ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setAnimal(data);
      } catch (error) {
        console.log("에러 발생:", error.message); // Rejected 처리
        return null;
      }
    }
    getData();
  }, []);
  return (
    <div>
      {animal.characteristic} {animal.animal}
    </div>
  );
}

export default Animal;
