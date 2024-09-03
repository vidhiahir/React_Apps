import NoProjectRight from "./components/NoProjectRight";
import Sidebar from "./components/Sidebar";
import AddNewProject from "./components/AddNewProject";
import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import ProjectInfo from "./components/ProjectInfo";

function App() {
  const pName = useRef();
  const pDesc = useRef();
  const pDueDate = useRef();
  const taskField = useRef();

  const [newProjectPage, showNewProjectPage] = useState(false);
  const [projectList, addProjectList] = useState([]);
  const [button, setButton] = useState(null);

  function addNewProjectPage() {
    showNewProjectPage(true);
  }

  function handleSave() {
    showNewProjectPage(false);
    const maxId = projectList.reduce(
      (max, project) => (project.id > max ? project.id : max),
      0
    );
    const curr = {
      id: maxId + 1,
      name: pName.current.value,
      desc: pDesc.current.value,
      dueDate: pDueDate.current.value,
      tasks: [],
    };
    setButton(null);
    addProjectList((prev) => [...prev, curr]);
    console.log(projectList);
  }

  function handleProjectDeletion() {
    setButton(null);
    addProjectList((prev) => {
      return prev.filter((project) => project.id !== button);
    });
  }

  function handleCancel() {
    setButton(null);
    showNewProjectPage(false);
  }

  function buttonHandle(id) {
    setButton(id);
    console.log(id);
  }

  function handleTaskAddition() {
    const newTaskName = taskField.current.value.trim();
    if (!newTaskName) {
      console.error("Task name cannot be empty");
      return;
    }
    addProjectList((prev) => {
      return prev.map((project) => {
        if (project.id === button) {
          const maxTaskId = project.tasks.reduce(
            (maxId, task) => Math.max(maxId, task.id),
            0
          );
          const addTask = {
            id: maxTaskId + 1,
            taskName: newTaskName,
          };

          return {
            ...project,
            tasks: [...project.tasks, addTask],
          };
        }
        return project;
      });
    });
    console.log(projectList);
    taskField.current.value = "";
  }

  function handleTaskDeletion(taskId) {
    addProjectList((prev) => {
      return prev.map((project) => {
        if (project.id === button) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }
        return project;
      });
    });
  }

  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar
          onButtonClick={addNewProjectPage}
          projectList={projectList}
          handleButton={buttonHandle}
        />
      </div>
      <div className="MainContent">
        {newProjectPage ? (
          <AddNewProject
            rName={pName}
            rDesc={pDesc}
            rDueDate={pDueDate}
            saveIt={handleSave}
            cancelIt={handleCancel}
          />
        ) : (
          <ProjectInfo
            button={button}
            projects={projectList}
            deleteProject={handleProjectDeletion}
            onButtonClick={addNewProjectPage}
            taskField={taskField}
            onTaskAddition={handleTaskAddition}
            onTaskDeletion={handleTaskDeletion}
          />
        )}
      </div>
    </div>
  );
}

export default App;
