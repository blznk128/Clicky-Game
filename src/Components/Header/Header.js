import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
  <div className="title">Narcos Click Game</div>
  <div className="scores">
    Score: {props.score} Top Score: {props.highscore}
  </div>
  </div>
);
//Title
export default Header;