import React from "react";
import "./StudentList.css";
function StudentCard({ student }) {
  return (
    <div className="card">
      <p>이름 : {student.name}</p>
      <p>
        점수 : {student.score}
        {student.score >= 90 && <span className="trophy">🏆</span>}
      </p>
    </div>
  );
}
function StudentList() {
  const students = [
    { id: 1, name: "김철수", score: 85 },
    { id: 2, name: "이영희", score: 92 },
    { id: 3, name: "박민수", score: 78 },
    { id: 4, name: "정수진", score: 95 },
  ];

  const bestStudent = students.filter((item) => item.score >= 90);
  console.log(bestStudent);

  return (
    <>
      <div className="container">
        {students.map((item) => (
          <StudentCard key={item.id} student={item} />
        ))}
        {/* 
      <div className="card">
        <p>이름 : 김철수</p>
        <p>점수 : 85</p>
      </div>
    
      <div className="card">
        <p>이름 : 이영희</p>
        <p>
          점수 : 92 <span className="trophy">🏆</span>
        </p>
      </div>

      <div className="card">
        <p>이름 : 박민수</p>
        <p>점수 : 78</p>
      </div>

      <div className="card">
        <p>이름 : 정수진</p>
        <p>
          점수 : 95 <span className="trophy">🏆</span>
        </p>
      </div> */}
      </div>
      <h2>우수학생</h2>
      <div className="container">
        {bestStudent.map((item) => (
          <StudentCard key={item.id} student={item} />
        ))}
      </div>
    </>
  );
}

export default StudentList;
