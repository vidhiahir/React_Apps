import React from "react";
import logo from "../assets/no-projects.png";
import "./NoProjectRight.css";

const NoProjectRight = ({ onButtonClick }) => {
  return (
    <div className="NoProjectRight">
      <img src={logo} alt="logo book" />
      <h2>No project Selected</h2>
      <h4>Select a Project or get started with a new one</h4>
      <button onClick={onButtonClick}>Create New Project</button>
    </div>
  );
};

export default NoProjectRight;
