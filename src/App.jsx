import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getBox } from "./actions/box";
import Recipes from "./components/Recipes";

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
        <div id="instructions"></div>
      </div>
      {/* <div id="add-recipe">
        <h2>Add a recipe</h2>
        <img src={defaultImg} alt="Default food image" />
        <input type="text" className="new-input" name="title" />
        <input type="text" className="new-input" name="description" />
        <input type="text" className="new-input" name="creator" />
      </div> */}
    </>
  );
};

export default App;
