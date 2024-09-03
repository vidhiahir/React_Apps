import React from "react";
import "./tasks.css";

const Tasks = ({ taskRef, addTaskHandle, deleteTaskHandle, projects, id }) => {
  const project = projects.find((project) => project.id === id);

  // Ensure the project exists and has tasks
  if (!project || !project.tasks) {
    return <div>No tasks available</div>;
  }

  return (
    <div className="Tasks">
      <div>
        <h1>TaskList</h1>
        <input ref={taskRef} type="text" />
        <button onClick={addTaskHandle}> Add Task </button>
      </div>

      <div>
        {project.tasks.length > 0 ? (
          <ul>
            {project.tasks.map((task) => (
              <li key={task.id}>
                <div className="separate">
                  {task.taskName}
                  <button onClick={() => deleteTaskHandle(task.id)}>
                    Clear
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>No tasks available</div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
