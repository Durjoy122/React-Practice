import React, { useState } from "react";
import './style.css';

function Chips({chips , handleDeleteChip , saveToDoList}) {

  const chiplist = chips.map((chip, index) => (
    <div key={index} className="chip">
      {chip}
      <span 
        onClick={() => handleDeleteChip(index)}
        className = "chip-close"
      >
        ×
      </span>
    </div>
  ));


  return (
    <div className="chips-container">
      <h2>Chips Input</h2>
      <form onSubmit={saveToDoList}>
        <input type="text"
          placeholder="Type a chip and press Enter"
          className="chip-input"
          name="name"
        />
      </form>
      <div>
        {chiplist}
      </div>
    </div>
  );
}

export default Chips;