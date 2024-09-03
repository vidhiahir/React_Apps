import React from "react";
import "./AddNewProject.css";

const AddNewProject = ({ rName, rDueDate, rDesc, saveIt, cancelIt }) => {
  return (
    <div className="AddNewProject">
      <h2>Add a project</h2>
      <div>
        <button onClick={cancelIt}>Cancel</button>
        <button onClick={saveIt}>Save</button>
        <label>Project Name</label>
        <input ref={rName} type="text" />
        <label>Description</label>
        <input ref={rDueDate} type="text" />
        <label>Due date</label>
        <input ref={rDesc} type="date" />
      </div>
    </div>
  );
};

export default AddNewProject;
