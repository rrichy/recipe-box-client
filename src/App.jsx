import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBox } from "./actions/box";
import Main from "./components/Main";
import AddRecipe from "./components/Form/AddRecipe";
import AllRecipes from "./components/AllRecipes";
import Recipes from "./components/Recipes";
import Instructions from "./components/Instruction";

import "./components/styles/css/index.css";

const App = () => {
  const { description, x, y } = useSelector((state) => state.tooltip);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBox());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <Main />
        <AddRecipe />
        <AllRecipes />
      </div>
      {/* {description !== "" && ( */}
      <div id="tooltip" style={{ left: x, top: y }}>
        {description}
      </div>
      {/* )} */}
      {/* <h1>Recipe Box</h1>
      <div id="box">
        <Recipes />
        <Instructions />
      </div> */}
    </>
  );
};

export default App;
