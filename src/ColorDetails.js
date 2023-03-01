import React from "react";
import { useParams } from "react-router-dom";

const ColorDetails = ({ colors }) => {
  const { color } = useParams();
  const selectedColor = colors.find((c) => c.name === color);

  return (
    <div>
      <h1>{selectedColor.name}</h1>
      <div style={{ backgroundColor: selectedColor.value, height: "200px" }} />
    </div>
  );
};

export default ColorDetails;
