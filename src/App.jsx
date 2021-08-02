import React from "react";

import { useSelector } from "react-redux";

import Main from "./components/Main";
import AddRecipe from "./components/Form/AddRecipe";
import AllRecipes from "./components/AllRecipes";
import Instructions from "./components/Instruction";

import "./components/styles/css/index.css";

const App = () => {
  const { show, description, x, y } = useSelector(
    (state) => state.utils.tooltip
  );

  return (
    <>
      <div className="main-container">
        <div className="container">
          <Main />
          <AddRecipe />
          <AllRecipes />
        </div>
        <Instructions />
      </div>
      {show && description !== "" && (
        <div id="tooltip" style={{ left: x, top: y }}>
          {description}
        </div>
      )}
    </>
  );
};

export default App;
