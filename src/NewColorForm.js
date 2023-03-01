import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ onAddColor }) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("#000000");
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddColor(name, value);
    history.push("/colors");
  };

  return (
    <div>
      <h1>Add New Color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="value">Value</label>
          <input
            type="color"
            id="value"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
