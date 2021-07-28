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
    ingredients: [{ quantity: "", unit: "", ingredient: "" }],
    directions: [{ direction: "" }],
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
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={(e) => editData({ ...data, title: e.target.value })}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={data.description}
          onChange={(e) => editData({ ...data, description: e.target.value })}
        />
        <fieldset name="image" id="image">
          <label>Choose an image:</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => editData({ ...data, image: base64 })}
          />
        </fieldset>
        <input
          type="text"
          name="creator"
          placeholder="Creator"
          value={data.creator}
          onChange={(e) => editData({ ...data, creator: e.target.value })}
        />
        <fieldset name="ingredients" id="ingredients">
          <legend>Ingredients</legend>
          {data.ingredients.map((d, i) => (
            <AddIngredient
              key={i}
              data={d}
              change={(e) => {
                const { name, value } = e.target;
                const ingredients = [...data.ingredients];
                ingredients[i][name] = value;
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
              const ingredients = [
                ...data.ingredients,
                { quantity: "", unit: "", ingredient: "" },
              ];
              editData({ ...data, ingredients });
            }}
          />
        </fieldset>
        <fieldset name="directions" id="directions">
          <legend>Directions</legend>
          {data.directions.map((d, i) => (
            <AddDirection
              key={i}
              direction={d.direction}
              index={i}
              change={(e) => {
                const { name, value } = e.target;
                const directions = [...data.directions];
                directions[i][name] = value;
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
              const directions = [...data.directions, { direction: "" }];
              editData({ ...data, directions });
            }}
          />
        </fieldset>
        <div id="button-wrapper">
          <button type="submit">Submit</button>
          <button
            onClick={() => {
              editData({
                title: "",
                description: "",
                image: "",
                creator: "",
                ingredients: [{ quantity: "", unit: "", ingredient: "" }],
                directions: [{ direction: "" }],
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

const AddIngredient = ({ data, change, index, remove }) => {
  const { quantity, unit, ingredient } = data;

  return (
    <fieldset className="ingredient">
      <input
        type="text"
        placeholder="Qty"
        name="quantity"
        value={quantity}
        onChange={(e) => change(e, index)}
      />
      <input
        type="text"
        placeholder="Unit"
        name="unit"
        value={unit}
        onChange={(e) => change(e, index)}
      />
      <input
        type="text"
        placeholder="Ingredient"
        name="ingredient"
        value={ingredient}
        onChange={(e) => change(e, index)}
      />
      &nbsp;
      <FontAwesomeIcon icon={faMinusCircle} onClick={remove} />
    </fieldset>
  );
};

const AddDirection = ({ direction, change, index, remove }) => {
  return (
    <fieldset className="direction">
      <label htmlFor={"direction-" + (index + 1)}>{index + 1}</label>
      &nbsp;
      <textarea
        name="direction"
        id={"direction-" + (index + 1)}
        value={direction}
        onChange={(e) => change(e, index)}
      ></textarea>
      &nbsp;
      <FontAwesomeIcon icon={faMinusCircle} onClick={remove} />
    </fieldset>
  );
};

export default AddRecipe;
