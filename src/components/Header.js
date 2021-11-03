import React from "react";
import Button from "./Button";

function Header({ isAddOpen, setIsAddOpen }) {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={isAddOpen ? "red" : "green"}
        text={isAddOpen ? "Close" : "Add"}
        setIsAddOpen={setIsAddOpen}
        isAddOpen={isAddOpen}
      />
    </header>
  );
}

export default Header;
