import React, { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
// favicon
// title
function App() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Dentist Appointment",
      day: "Jan 5th at 4:20PM",
      reminder: true,
    },
    {
      id: 1,
      text: "Festival at school",
      day: "Feb 9th at 2:40PM",
      reminder: false,
    },
    {
      id: 2,
      text: "Shopping",
      day: "Feb 15th at 3:00PM",
      reminder: false,
    },
    {
      id: 3,
      text: "Final Exam",
      day: "May 10th at 8:30AM",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="main">
      <Header isAddOpen={isAddOpen} setIsAddOpen={setIsAddOpen} />
      {isAddOpen ? <AddTask addTask={addTask} /> : ""}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        "There is no more tasks!"
      )}
    </div>
  );
}

export default App;
