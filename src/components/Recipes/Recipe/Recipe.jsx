import React from "react";

import "../../styles/css/Recipe.css";
import defaultImg from "../../../images/default.jpg";

const Recipe = ({ image, title, description, likeCount = 0 }) => {
  return (
    <figure className="recipe">
      <img src={image || defaultImg} alt={title || "Alt Title"} />
      <figcaption>{title || "This is a Title"}</figcaption>
      <p>
        {description ||
          "This is just a sample description. Does this words I am using lengthens this sentences?"}
      </p>
      <p>{"Like:" + likeCount}</p>
    </figure>
  );
};

export default Recipe;
