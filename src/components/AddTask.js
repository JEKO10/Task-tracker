import React, { useState } from "react";

function AddTask({ addTask }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please Add Task");
      return;
    }

    addTask({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div className="add">
      <form onSubmit={onSubmit}>
        <div>
          <label>Task</label>
          <input
            type="text"
            placeholder="Add task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label>Day and Time</label>
          <input
            type="text"
            placeholder="Add Day and Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="reminder">
          <label>Reminder*</label>
          <input type="checkbox" id="checkbox" />
        </div>
        <input type="submit" value="Save Task" />
        <p>* double tap on task</p>
      </form>
    </div>
  );
}

export default AddTask;
