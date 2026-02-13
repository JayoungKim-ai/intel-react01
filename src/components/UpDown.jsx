import React from "react";
import "./UpDown.css";
import { useState } from "react";

// 시도횟수 추가 : 총 10번만에 맞추셨습니다.

function UpDown() {
  const [num, setNum] = useState(0); //사용자입력값
  const [result, setResult] = useState(""); //결과
  const [correct, setCorrect] = useState(Math.floor(Math.random() * 100) + 1); //정답

  const handleClick = () => {
    console.log("함수구현");
    console.log(num, correct);
    parseInt(num) > correct && setResult("Down하세요");
    parseInt(num) < correct && setResult("Up하세요");
    parseInt(num) === correct && setResult("정답입니다.");
  };

  return (
    <div className="game-container">
      <h1>업앤다운 숫자 맞추기 게임</h1>
      <p>1부터 100 사이의 숫자를 맞춰보세요!</p>
      <div className="input-group">
        <input
          type="number"
          id="userInput"
          placeholder="숫자 입력"
          min="1"
          max="100"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <button onClick={handleClick}>제출</button>
      </div>
      <p id="result">{result}</p>
    </div>
  );
}

export default UpDown;
