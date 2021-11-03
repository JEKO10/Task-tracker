import React, { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
// favicon
// title
function App() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="main">
      <Header isAddOpen={isAddOpen} setIsAddOpen={setIsAddOpen} />
      {isAddOpen ? <AddTask /> : ""}
    </div>
  );
}

export default App;
