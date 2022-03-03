import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ task, deleteTask, reminderToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => {
        reminderToggle(task.id);
      }}
    >
      <div>
        <h3>{task.text}</h3>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </div>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
