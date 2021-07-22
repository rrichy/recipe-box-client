import React, { useState } from "react";

import Recipe from "./Recipe/Recipe";
import "../styles/css/Recipes.css";

const Recipes = () => {
  const [showRecipe, changeRecipe] = useState(0);

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
        <button>Add recipe</button>
        <button>Other recipes</button>
      </div>
    </div>
  );
};

export default Recipes;
