import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Recipe, RecipeListed } from "./Recipe/Recipe";
import AddRecipe from "./Form/AddRecipe";
import "./styles/css/Recipes.css";

const Recipes = () => {
  const [showRecipe, changeRecipe] = useState(0);
  const [showOthers, toggleOthers] = useState(false);
  const [showAdd, toggleAdd] = useState(true); /* defaults into false */

  return (
    <div id="recipe-selector">
      <h2>Top Recipes</h2>
      <div id="slider">
        <div id="slider-content">
          {/* edit this to top recipes taken from the DB */}
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
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
          {/* edit this to all recipes taken from the DB */}
          <RecipeListed />
          <RecipeListed />
          <RecipeListed />
          <RecipeListed />
          <RecipeListed />
          <RecipeListed />
          <RecipeListed />
          <RecipeListed />
          <RecipeListed />
          <RecipeListed />
        </div>
      )}
      {showAdd && <AddRecipe closeButton={toggleAdd} />}
    </div>
  );
};

export default Recipes;
