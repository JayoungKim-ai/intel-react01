import React from "react";
import { useState, useEffect } from "react";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/about`);
      const data = await response.json();
      setAbout(data);
      console.log(data);
    }
    getData();
  }, []);
  return (
    <div>
      <div>이름:{about.name}</div>
      <div>전화번호:{about.phone}</div>
      <div>주소:{about.address}</div>
    </div>
  );
};

export default About;
