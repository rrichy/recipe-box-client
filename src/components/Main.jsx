import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  // faDotCircle,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   faCircle,
//   faDotCircle as faHoverDotCircle,
// } from "@fortawesome/free-regular-svg-icons";

import {
  changePage,
  hideInstruction,
  emptyInstruction,
} from "../actions/utils";
import LoadingIcon from "./LoadingIcon";
import { Recipe } from "./Recipe/Recipe";
import "./styles/css/Main.css";

const Main = () => {
  const top = useSelector((state) => state.utils.topRecipes);
  const page = useSelector((state) => state.utils.currentPage);
  const [currentRecipe, nextRecipe] = useState(0);
  const dispatch = useDispatch();

  if (!top.length) {
    return (
      <div className={"main" + (page === "main" ? " main--active" : "")}>
        <a
          href="#"
          onClick={() => {
            dispatch(changePage("main"));
            setTimeout(() => dispatch(emptyInstruction()), 600);
            dispatch(hideInstruction());
          }}
        >
          Recipe Box
        </a>
        <div className="top-recipes">
          <LoadingIcon classmod={"blue"} />
        </div>
      </div>
    );
  }

  return (
    <div className={"main" + (page === "main" ? " main--active" : "")}>
      <a
        href="#"
        onClick={() => {
          dispatch(changePage("main"));
          setTimeout(() => dispatch(emptyInstruction()), 600);
          dispatch(hideInstruction());
        }}
      >
        Recipe Box
      </a>
      <div className="top-recipes">
        <div
          className="top-recipes__container"
          style={{
            transform: `translate(${-125 - currentRecipe * 500}px, -50%)`,
          }}
        >
          {top.map((recipe) => (
            <Recipe key={recipe._id} data={recipe} />
          ))}
        </div>
        <div className="top-recipes__buttons">
          {Array(5)
            .fill()
            .map((_, i) => (
              <label key={i} className="custom-radio">
                <input
                  type="radio"
                  name="select"
                  value={i}
                  checked={currentRecipe === i}
                  onClick={({ target }) => {
                    nextRecipe(Number(target.value));
                  }}
                />
                <span></span>
              </label>
            ))}
        </div>
        <div className="top-recipes__arrow-nav">
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={() =>
              nextRecipe(currentRecipe <= 0 ? 4 : currentRecipe - 1)
            }
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={() =>
              nextRecipe(currentRecipe >= 4 ? 0 : currentRecipe + 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
