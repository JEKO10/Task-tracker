import React from "react";
import Task from "./Task";

function Tasks({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} deleteTask={deleteTask} />;
      })}
    </div>
  );
}

export default Tasks;
