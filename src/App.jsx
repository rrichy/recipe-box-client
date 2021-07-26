import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBox } from "./actions/box";
import Recipes from "./components/Recipes";
import Instructions from "./components/Instruction";

import "./components/styles/css/index.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBox());
  }, [dispatch]);

  return (
    <>
      <h1>Recipe Box</h1>
      <div id="box">
        <Recipes />
        <Instructions />
      </div>
      {/* Everything about the recipe */}
    </>
  );
};

export default App;
