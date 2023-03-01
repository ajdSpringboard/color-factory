import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ colors }) => {
  const colorLinks = colors.map((color) => (
    <li key={color.name}>
      <Link to={`/colors/${color.name}`} style={{ color: color.value }}>
        {color.name}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/colors/new">Add Color</Link>
        </li>
        {colorLinks}
      </ul>
    </nav>
  );
};

export default Nav;
