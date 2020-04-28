import React, {useState} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
// import Color from "./Color";
import NewColorForm from "./NewColorForm";

function Routes() {
  const [colors, setColors] = useState([]);

  // add a new color
  const add = newColor => {
    setColors(colors => [...colors, newColor]);
  };

  return (
    <Switch>
      <Route exact path="/colors" >
        <ColorList colors={colors} /> 
      </Route>
      {/* <Route path="/colors/:name" >
        <Color /> 
      </Route> */}
      <Route exact path="/colors/new" >
        <NewColorForm add={add}/> 
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;
