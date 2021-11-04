import React from "react";
import Task from "./Task";

function Tasks({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
}

export default Tasks;
