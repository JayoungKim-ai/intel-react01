import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/festival">Festival</NavLink>
      <NavLink to="/test">잘못된라우터</NavLink>
      <a href="http://www.naver.com" target="_blank">
        Naver
      </a>
    </nav>
  );
}

export default Navigation;
