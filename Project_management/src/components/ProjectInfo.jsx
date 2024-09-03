import React, { useState } from "react";
import NoProjectRight from "./NoProjectRight";
import "./ProjectInfo.css";

import Tasks from "./Tasks";

const ProjectInfo = ({
  button,
  projects,
  deleteProject,
  onButtonClick,
  taskField,
  onTaskAddition,
  onTaskDeletion,
}) => {
  const project = projects.find((item) => item.id === button);
  if (!button || !project) {
    return <NoProjectRight onButtonClick={onButtonClick} />;
  }
  return (
    <div className="projectInfoContainer">
      <div className="ProjectInfo">
        <button onClick={deleteProject}>Delete</button>
        <h1>{project.name}</h1>
        <h4>{project.desc}</h4>
        <h2>{project.dueDate}</h2>
      </div>
      <div className="Tasks">
        <Tasks
          taskRef={taskField}
          addTaskHandle={onTaskAddition}
          deleteTaskHandle={onTaskDeletion}
          projects={projects}
          id={button}
        />
      </div>
    </div>
  );
};

export default ProjectInfo;
