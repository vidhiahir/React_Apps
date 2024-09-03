import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onButtonClick, projectList, handleButton }) => {
  return (
    <div className="Sidebar">
      <h1> My Projects </h1>
      <button className="add-project" onClick={onButtonClick}>
        Add Project
      </button>
      <ul>
        {projectList.map((item) => (
          <li key={item.id}>
            <button
              className="project-name"
              onClick={() => handleButton(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
