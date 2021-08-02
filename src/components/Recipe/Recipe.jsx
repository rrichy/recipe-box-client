import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp as activeThumb } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as inactiveThumb } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";

import {
  updateTooltipDesc,
  showInstruction,
  updateInstruction,
} from "../../actions/utils";
import "../styles/css/Recipe.css";
import defaultImg from "../../images/default.jpg";

export const Recipe = ({ data }) => {
  const { image, title, description, likeCount = 0, type = "" } = data;
  const dispatch = useDispatch();
  return (
    <a
      href="#"
      className={"recipe " + type}
      onClick={() => {
        dispatch(updateInstruction(data));
        dispatch(showInstruction());
      }}
    >
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

export const RecipeListed = ({ data }) => {
  const { image, title, likeCount = 0, description } = data;
  const dispatch = useDispatch();
  return (
    <a
      href="#"
      className="recipe-listed"
      onMouseEnter={() => dispatch(updateTooltipDesc(description))}
      onMouseLeave={() => dispatch(updateTooltipDesc(""))}
      onClick={() => {
        dispatch(updateInstruction(data));
        dispatch(showInstruction());
      }}
    >
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
