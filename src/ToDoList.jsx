import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function toggleCompleteTask(index) {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter((i) => i !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  }

  return (
    <div
      className="container mt-5 p-4"
      style={{ backgroundColor: "#6a0dad", borderRadius: "5px" }}
    >
      <h1 className="text-center mb-4 text-white">To-Do List</h1>
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ol className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              completedTasks.includes(index)
                ? "text-decoration-line-through"
                : ""
            }`}
          >
            <span
              onClick={() => toggleCompleteTask(index)}
              style={{ cursor: "pointer" }}
            >
              {task}
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
