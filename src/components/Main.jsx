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

import { changePage } from "../actions/pages";
import { Recipe } from "./Recipe/Recipe";
import "./styles/css/Main.css";
import { hideInstruction, emptyInstruction } from "../actions/instruction";

const Main = () => {
  const top = useSelector((state) => state.top);
  const page = useSelector((state) => state.page);
  const [currentRecipe, nextRecipe] = useState(0);
  const dispatch = useDispatch();

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
            <Recipe key={recipe.title} data={recipe} />
          ))}
        </div>
        <div className="top-recipes__buttons">
          {Array(5)
            .fill()
            .map((_, i) => (
              <label class="custom-radio">
                <input
                  key={i}
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
