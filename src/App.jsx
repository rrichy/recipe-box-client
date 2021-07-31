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
  const { show, description, x, y } = useSelector((state) => state.tooltip);
  const { show: showInstruction, data } = useSelector(
    (state) => state.instruction
  );

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
          in={showInstruction}
          timeout={500}
          classNames="instruction-transition"
          unmountOnExit
        >
          <Instructions recipe={data} />
        </CSSTransition>
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
