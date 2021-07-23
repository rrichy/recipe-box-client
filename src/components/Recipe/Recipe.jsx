import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as activeThumb } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as inactiveThumb } from "@fortawesome/free-regular-svg-icons";

import "../styles/css/Recipe.css";
import defaultImg from "../../images/default.jpg";

export const Recipe = ({
  image,
  title,
  description,
  likeCount = 0,
  type = "recipe",
}) => {
  return (
    <a href="#" className={type}>
      <img src={image || defaultImg} alt={title || "Alt Title"} />
      <h3>{title || "This is a Title"}</h3>
      <p>
        {description ||
          "This is just a sample description. Does this words I am using lengthens this sentences?"}
      </p>
      <p>
        <FontAwesomeIcon icon={inactiveThumb} />
        &nbsp;
        {likeCount}
      </p>
    </a>
  );
};

export const RecipeListed = ({ image, title, likeCount = 0 }) => {
  return (
    <a href="#" className="recipe-listed">
      <img src={image || defaultImg} alt={title || "Alt Title"} />
      <p>{title || "This is a Title"}</p>
      <p>
        <FontAwesomeIcon icon={inactiveThumb} />
        &nbsp;
        {likeCount}
      </p>
    </a>
  );
};
