import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as inactiveThumb } from "@fortawesome/free-regular-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { deleteRecipe } from "../actions/recipes";
import { editRecipe, hideInstruction, changePage } from "../actions/utils";
import "./styles/css/Instruction.css";

const Instructions = () => {
  const { show: showInstruction, data } = useSelector(
    (state) => state.utils.instruction
  );
  const {
    image,
    title,
    likeCount,
    creator,
    description,
    ingredients,
    directions,
    _id,
  } = data;
  const dispatch = useDispatch();

  return (
    <CSSTransition
      in={showInstruction}
      timeout={500}
      classNames="instruction-transition"
      unmountOnExit
    >
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
                ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
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
        <div className="instructions__button-container">
          <a
            href="#"
            className="instructions__return"
            onClick={() => {
              // setTimeout(() => dispatch(emptyInstruction()), 600);
              dispatch(hideInstruction());
            }}
          >
            Back
          </a>
          <div className="instructions__button-subcontainer">
            <a
              href="#"
              className="instructions__edit"
              onClick={() => {
                dispatch(hideInstruction());
                dispatch(editRecipe(_id));
                dispatch(changePage("add-recipe"));
              }}
            >
              <FontAwesomeIcon icon={faEdit} />
            </a>
            <a
              href="#"
              className="instructions__delete"
              onClick={() => {
                dispatch(hideInstruction());
                dispatch(deleteRecipe(_id));
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Instructions;
