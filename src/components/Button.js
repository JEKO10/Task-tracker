import React from "react";

function Button({ color, text, isAddOpen, setIsAddOpen }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={() => {
        setIsAddOpen(!isAddOpen);
      }}
    >
      {text}
    </button>
  );
}

export default Button;
