import React from "react";

function AddTask() {
  return (
    <div className="add">
      <form>
        <div>
          <label htmlFor="">Task</label>
          <input type="text" placeholder="Add task" />
        </div>
        <div>
          <label htmlFor="">Day and Time</label>
          <input type="text" placeholder="Add Day and Time" />
        </div>
        <div className="reminder">
          <label htmlFor="">Reminder*</label>
          <input type="checkbox" />
        </div>
        <input type="submit" />
        <p>* double tap on task</p>
      </form>
    </div>
  );
}

export default AddTask;
