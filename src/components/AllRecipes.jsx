import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { hideTooltip, showTooltip, updateTooltipPos } from "../actions/tooltip";
import { RecipeListed } from "./Recipe/Recipe";
import { topRecipes } from "../actions/toprecipes";
import { changePage } from "../actions/pages";
import "./styles/css/AllRecipes.css";

const AllRecipes = () => {
  const box = useSelector((state) => state.box);
  const page = useSelector((state) => state.page);

  const dispatch = useDispatch();

  useEffect(() => {
    const top = box.sort((a, b) => b.likeCount - a.likeCount).slice(0, 5);
    dispatch(topRecipes(top));
  }, [box]);

  useEffect(() => {
    if (page === "all-recipes") setTimeout(() => dispatch(showTooltip()), 500);
    else dispatch(hideTooltip());
  }, [page]);

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
        {box.map((recipe) => (
          <RecipeListed key={recipe.title} data={recipe} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
