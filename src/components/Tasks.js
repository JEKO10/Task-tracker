import React from "react";
import Task from "./Task";

function Tasks({ tasks, deleteTask, reminderToggle }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            reminderToggle={reminderToggle}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
