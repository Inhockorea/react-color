import React , {useState} from "react";
import { Link } from "react-router-dom";

function ColorList({colors}){
  console.log(colors)
  const colorLinks = colors.map(color => (
    <Link to={`/colors/${color.name}`}> {color.name} </Link>
  ));

  return (
    <div>
      <div>
        <Link to="/colors/new/"> ADD A COLOR </Link>
      </div>
      <h3>Color List</h3>
        <div>
          {colorLinks}
        </div>
    </div>
  )
}

export default ColorList;