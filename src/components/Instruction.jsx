import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as inactiveThumb } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { editRecipe } from "../actions/form";
import { hideInstruction, emptyInstruction } from "../actions/instruction";
import "./styles/css/Instruction.css";

const Instructions = ({ recipe }) => {
  const {
    image,
    title,
    likeCount,
    creator,
    description,
    ingredients,
    directions,
  } = recipe;

  const dispatch = useDispatch();

  return (
    <div className="instructions">
      <img className="instructions__image" src={image} alt={title} />
      <div className="instructions__header">
        <h2>{title}</h2>
        <span>
          &nbsp;
          <FontAwesomeIcon icon={inactiveThumb} /> &nbsp;{likeCount}
        </span>
      </div>

      <span className="instructions__creator">{creator}</span>
      <span className="instructions__description">{description}</span>
      <div className="instructions__main-container">
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
      <a
        href="#"
        className="instructions__return"
        onClick={() => {
          setTimeout(() => dispatch(emptyInstruction()), 600);
          dispatch(hideInstruction());
        }}
      >
        Back
      </a>
      <a
        href="#"
        className="instructions__edit"
        onClick={() => dispatch(editRecipe(recipe))}
      >
        <FontAwesomeIcon icon={faEdit} />
      </a>
      <a href="#" className="instructions__delete" onClick={() => {}}>
        <FontAwesomeIcon icon={faTrash} />
      </a>
    </div>
  );
};

export default Instructions;
