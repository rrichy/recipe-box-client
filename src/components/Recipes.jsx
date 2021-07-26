import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Recipe, RecipeListed } from "./Recipe/Recipe";
import AddRecipe from "./Form/AddRecipe";
import { updateInstruction } from "../actions/instruction";
import "./styles/css/Recipes.css";

const Recipes = () => {
  const box = useSelector((state) => state.box);
  const dispatch = useDispatch();
  const [showRecipe, changeRecipe] = useState(0);
  const [showOthers, toggleOthers] = useState(false); /* defaults into false */
  const [showAdd, toggleAdd] = useState(false); /* defaults into false */
  const [hoverState, changeHoverItems] = useState({
    title: "",
    image: "",
    description: "",
    likeCount: 0,
    type: "recipe--floating",
  });

  console.log("list of recipes");
  console.log(box);

  const sliderContent = box
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, 5);

  return (
    <div id="recipe-selector">
      <h2>Top Recipes</h2>
      <div id="slider">
        <div id="slider-content">
          {sliderContent.map((recipe) => (
            <Recipe data={recipe} />
          ))}
        </div>
      </div>
      <div id="slider-radio">
        {Array(5)
          .fill()
          .map((_, i) => (
            <input
              key={i}
              type="radio"
              name="select"
              value={i}
              checked={showRecipe === i}
              onClick={({ target }) => {
                changeRecipe(Number(target.value));
              }}
              onChange={() =>
                (document.getElementById(
                  "slider-content"
                ).style.transform = `translateX(-${20 * i}%)`)
              }
            />
          ))}
      </div>
      <div id="recipe-buttons">
        <button onClick={() => toggleAdd(!showAdd)}>Add recipe</button>
        <button onClick={() => toggleOthers(!showOthers)}>
          Other recipes&nbsp;
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={showOthers ? "fa-chevron-left--opposite" : ""}
          />
        </button>
      </div>
      {showOthers && (
        <div id="other-recipes">
          {box.map((recipe) => (
            <RecipeListed
              data={recipe}
              hover={() =>
                changeHoverItems({
                  ...hoverState,
                  title: recipe.title,
                  image: recipe.image,
                  description: recipe.description,
                  likeCount: recipe.likeCount,
                })
              }
            />
          ))}
        </div>
      )}
      {showAdd && <AddRecipe closeButton={toggleAdd} />}
      {showOthers && <Recipe data={hoverState} />}
    </div>
  );
};

export default Recipes;
