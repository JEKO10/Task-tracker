import React from "react";

function AddTask() {
  return (
    <div className="add">
      <form>
        <div>
          <label>Task</label>
          <input type="text" placeholder="Add task" />
        </div>
        <div>
          <label>Day and Time</label>
          <input type="text" placeholder="Add Day and Time" />
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
