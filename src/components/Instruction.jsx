import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as inactiveThumb } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";

import "./styles/css/Instruction.css";

const Instructions = () => {
  const recipe = useSelector((state) => state.instruction);

  console.log("current instruction");
  console.log(recipe);

  if (Object.entries(recipe).length) {
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
              {ingredients.map((a, i) => (
                <li key={i}>{`${a.quantity} ${a.unit} ${a.ingredient}`}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Directions</h3>
            <ul>
              {directions.map((dir, i) => (
                <li key={i}>{`${i + 1}. ${dir.direction}`}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  } else {
    return (
      <div id="instructions">
        This is blank
        {/* picture
			title likecount
			creator
			description
			ingredients directions
			 */}
      </div>
    );
  }
};

export default Instructions;
