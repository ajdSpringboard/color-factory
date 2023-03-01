import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Nav from "./Nav";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

const App = () => {
  const [colors, setColors] = useState([]);

  const addColor = (name, value) => {
    const newColor = { name, value };
    setColors([newColor, ...colors]);
  };

  return (
    <BrowserRouter>
      <Nav colors={colors}/>
      <Routes>
        <Route exact path="/colors" element={<ColorList colors={colors} />} />
        <Route
          exact
          path="/colors/:color"
          element={<ColorDetails colors={colors} />}
        />
        <Route
          exact
          path="/colors/new"
          element={<NewColorForm onAddColor={addColor} />}
        />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

