import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRecipes } from "../actions/recipes";
import {
  hideTooltip,
  showTooltip,
  updateTooltipPos,
  topRecipes,
  changePage,
} from "../actions/utils";
import { RecipeListed } from "./Recipe/Recipe";
import "./styles/css/AllRecipes.css";

const AllRecipes = () => {
  const recipes = useSelector((state) => state.recipes);
  const currentId = useSelector((state) => state.utils.currentId);
  const page = useSelector((state) => state.utils.currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    console.log("getting recipes");
  }, [currentId, dispatch]);

  useEffect(() => {
    const top = recipes.sort((a, b) => b.likeCount - a.likeCount).slice(0, 5);
    dispatch(topRecipes(top));
    console.log(recipes);
  }, [recipes, dispatch]);

  useEffect(() => {
    // setTimeout is used to delay the rendering of the tooltip. Without it, it makes the all-recipes-container stutter when animating
    if (page === "all-recipes") setTimeout(() => dispatch(showTooltip()), 500);
    else dispatch(hideTooltip());
  }, [page, dispatch]);

  return (
    <div
      className={
        "all-recipes" + (page === "all-recipes" ? " all-recipes--active" : "")
      }
    >
      <a href="#" onClick={() => dispatch(changePage("all-recipes"))}>
        All Recipes
      </a>
      <div
        className="all-recipes-container"
        onMouseMove={({ pageX, pageY }) =>
          dispatch(updateTooltipPos([pageX, pageY]))
        }
      >
        {recipes.map((recipe) => (
          <RecipeListed key={recipe._id} data={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
