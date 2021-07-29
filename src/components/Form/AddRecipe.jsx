import React, { Component, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

import { changePage } from "../../actions/pages";
import { postRecipe } from "../../actions/box";
import "../styles/css/AddRecipe.css";

// // const mapStateToProps = (state) => ({})
// const mapDispatchToProps = (dispatch) => ({
//   post: (recipe) => dispatch(postRecipe(recipe)),
// });

// class AddRecipe extends Component {

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.post(this.state);
//     // this.handleClear();
//     // console.log("local state");
//     // console.log(this.state);
//     // console.log("redux state");
//     // console.log(this.props);
//   };

const AddRecipe = () => {
  const [data, editData] = useState({
    title: "",
    description: "",
    image: "",
    creator: "",
    ingredients: [""],
    directions: [""],
  });
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  return (
    <div
      className={
        "add-recipe" + (page === "add-recipe" ? " add-recipe--active" : "")
      }
    >
      <a href="#add-recipe" onClick={() => dispatch(changePage("add-recipe"))}>
        Add Recipe
      </a>
      <form /* onSubmit={this.handleSubmit} */>
        <label className="form-input-container">
          <input
            type="text"
            name="title"
            value={data.title}
            placeholder=" "
            onChange={(e) => editData({ ...data, title: e.target.value })}
          />
          <span>Title</span>
        </label>
        <label className="form-input-container">
          <input
            type="text"
            name="description"
            placeholder=" "
            value={data.description}
            onChange={(e) => editData({ ...data, description: e.target.value })}
          />
          <span>Description</span>
        </label>
        <fieldset name="image" id="image">
          <label>Choose an image:</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => editData({ ...data, image: base64 })}
          />
        </fieldset>
        <label className="form-input-container">
          <input
            type="text"
            name="creator"
            placeholder=" "
            value={data.creator}
            onChange={(e) => editData({ ...data, creator: e.target.value })}
          />
          <span>Creator</span>
        </label>
        <fieldset name="ingredients" id="ingredients">
          <legend>Ingredients</legend>
          {data.ingredients.map((ingredient, i) => (
            <AddIngredient
              key={i}
              ingredient={ingredient}
              change={(e) => {
                const { value } = e.target;
                const ingredients = [...data.ingredients];
                ingredients[i] = value;
                editData({ ...data, ingredients });
              }}
              index={i}
              remove={() => {
                const ingredients = [...data.ingredients];
                ingredients.splice(i, 1);
                editData({ ...data, ingredients });
              }}
            />
          ))}
          <FontAwesomeIcon
            icon={faPlusCircle}
            onClick={() => {
              const ingredients = [...data.ingredients, ""];
              editData({ ...data, ingredients });
            }}
          />
        </fieldset>
        <fieldset name="directions" id="directions">
          <legend>Directions</legend>
          {data.directions.map((direction, i) => (
            <AddDirection
              key={i}
              direction={direction}
              index={i}
              change={(e) => {
                const { value } = e.target;
                const directions = [...data.directions];
                directions[i] = value;
                editData({ ...data, directions });
              }}
              remove={() => {
                const directions = [...data.directions];
                directions.splice(i, 1);
                editData({ ...data, directions });
              }}
            />
          ))}
          <FontAwesomeIcon
            icon={faPlusCircle}
            onClick={() => {
              const directions = [...data.directions, ""];
              editData({ ...data, directions });
            }}
          />
        </fieldset>
        <div id="button-wrapper">
          <button type="submit">Submit</button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editData({
                title: "",
                description: "",
                image: "",
                creator: "",
                ingredients: [""],
                directions: [""],
              });
            }}
          >
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
};

const AddIngredient = ({ ingredient, change, index, remove }) => {
  return (
    // <fieldset className="ingredient">
    <label className="form-input-container">
      <input
        type="text"
        placeholder=" "
        name="ingredient"
        value={ingredient}
        onChange={(e) => change(e, index)}
      />
      <span>Enter ingredient</span>
      <FontAwesomeIcon icon={faMinusCircle} onClick={remove} />
    </label>
    // </fieldset>
  );
};

const AddDirection = ({ direction, change, index, remove }) => {
  return (
    // <fieldset className="direction">
    <label className="form-input-container">
      <textarea
        name="direction"
        id={"direction-" + (index + 1)}
        placeholder=" "
        value={direction}
        onChange={(e) => change(e, index)}
      ></textarea>
      <span>{`Step ${index + 1}`}</span>
      <FontAwesomeIcon icon={faMinusCircle} onClick={remove} />
    </label>
    // </fieldset>
  );
};

export default AddRecipe;
