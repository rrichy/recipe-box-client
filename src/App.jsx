import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";

import { getBox } from "./actions/box";
import Main from "./components/Main";
import AddRecipe from "./components/Form/AddRecipe";
import AllRecipes from "./components/AllRecipes";
import Instructions from "./components/Instruction";

import "./components/styles/css/index.css";

const App = () => {
  const { description, x, y } = useSelector((state) => state.tooltip);
  const recipe = useSelector((state) => state.instruction);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBox());
  }, [dispatch]);

  return (
    <>
      <div className="main-container">
        <div className="container">
          <Main />
          <AddRecipe />
          <AllRecipes />
        </div>
        <CSSTransition
          in={Object.entries(recipe).length !== 0}
          timeout={500}
          classNames="instruction-transition"
          unmountOnExit
        >
          <Instructions recipe={recipe} />
        </CSSTransition>
      </div>
      {description !== "" && (
        <div id="tooltip" style={{ left: x, top: y }}>
          {description}
        </div>
      )}
    </>
  );
};

export default App;
