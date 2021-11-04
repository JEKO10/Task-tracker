import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ task, deleteTask }) {
  console.log(task.text, task.day);

  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
