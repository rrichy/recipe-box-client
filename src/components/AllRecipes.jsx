import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateTooltipPos } from "../actions/tooltip";
import { RecipeListed } from "./Recipe/Recipe";
import { topRecipes } from "../actions/toprecipes";
import { changePage } from "../actions/pages";
import "./styles/css/AllRecipes.css";

const AllRecipes = () => {
  const box = useSelector((state) => state.box);
  const page = useSelector((state) => state.page);

  const dispatch = useDispatch();

  const top = box.sort((a, b) => b.likeCount - a.likeCount).slice(0, 5);

  dispatch(topRecipes(top));
  return (
    <div
      className={
        "all-recipes" + (page === "all-recipes" ? " all-recipes--active" : "")
      }
    >
      <a
        href="#all-recipes"
        onClick={() => dispatch(changePage("all-recipes"))}
      >
        All Recipes
      </a>
      <div
        className="all-recipes-container"
        onMouseMove={({ pageX, pageY }) =>
          dispatch(updateTooltipPos([pageX, pageY]))
        }
      >
        {box.map((recipe) => (
          <RecipeListed key={recipe.title} data={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
