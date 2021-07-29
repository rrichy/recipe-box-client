import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as inactiveThumb } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";

import { emptyInstruction } from "../actions/instruction";
import "./styles/css/Instruction.css";

const Instructions = ({ recipe }) => {
  // const recipe = useSelector((state) => state.instruction);
  const dispatch = useDispatch();
  console.log("current instruction");
  console.log(recipe);

  const {
    image,
    title,
    likeCount,
    creator,
    description,
    ingredients,
    directions,
  } = recipe;

  return (
    <div id="instructions">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <span>
          &nbsp;
          <FontAwesomeIcon icon={inactiveThumb} /> &nbsp;{likeCount}
        </span>
      </div>

      <span>{creator}</span>
      <span>{description}</span>
      <div>
        <section>
          <h3>Ingredients</h3>
          <ul>
            {ingredients &&
              ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
          </ul>
        </section>
        <section>
          <h3>Directions</h3>
          <ul>
            {directions &&
              directions.map((direction, i) => <li key={i}>{direction}</li>)}
          </ul>
        </section>
      </div>
      <a href="#" onClick={() => dispatch(emptyInstruction())}>
        Back
      </a>
    </div>
  );
};

export default Instructions;
