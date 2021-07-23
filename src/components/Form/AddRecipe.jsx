import React, { Component, useState } from "react";
import FileBase from "react-file-base64";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

import "../styles/css/AddRecipe.css";

class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      image: "",
      create: "",
      tags: "",
      ingredients: [{ quantity: "", unit: "", ingredient: "" }],
      directions: [{ direction: "" }],
    };
  }

  /* handle changes in ingredient */
  changeIngredient = (e, index) => {
    const { name, value } = e.target;
    const ingredients = [...this.state.ingredients];
    ingredients[index][name] = value;
    this.setState({ ingredients });
  };

  removeIngredient = (index) => {
    const ingredients = [...this.state.ingredients];
    ingredients.splice(index, 1);
    this.setState({ ingredients });
  };

  addIngredient = () => {
    const ingredients = [
      ...this.state.ingredients,
      { quantity: "", unit: "", ingredient: "" },
    ];
    this.setState({ ingredients });
  };

  /* handle changes in direction */
  changeDirection = (e, index) => {
    const { name, value } = e.target;
    const directions = [...this.state.directions];
    directions[index][name] = value;
    this.setState({ directions });
  };

  removeDirection = (index) => {
    const directions = [...this.state.directions];
    directions.splice(index, 1);
    this.setState({ directions });
  };

  addDirection = () => {
    const directions = [...directions, { direction: "" }];
    this.setState({ directions });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleClear = () => {
    this.setState({
      title: "",
      description: "",
      image: "",
      create: "",
      tags: "",
      ingredients: [{ quantity: "", unit: "", ingredient: "" }],
      directions: [{ direction: "" }],
    });
  };

  render() {
    const { title, description, creator, tags, ingredients, directions } =
      this.state;

    return (
      <div id="add-recipe">
        <form onSubmit={this.handleSubmit}>
          <h2>Add Recipe</h2>
          <FontAwesomeIcon
            icon={faWindowClose}
            onClick={() => this.props.closeButton(false)}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => this.setState({ image: base64 })}
          />
          <input
            type="text"
            name="creator"
            placeholder="Creator"
            value={creator}
            onChange={(e) => this.setState({ creator: e.target.value })}
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags"
            value={tags}
            onChange={(e) => this.setState({ tags: e.target.value })}
          />
          <fieldset name="ingredients" id="ingredients">
            <legend>Ingredients</legend>
            {ingredients.map((data, i) => (
              <AddIngredient
                key={i}
                data={data}
                change={this.changeIngredient}
                index={i}
                remove={() => this.removeIngredient(i)}
              />
            ))}
            <FontAwesomeIcon icon={faPlusCircle} onClick={this.addIngredient} />
          </fieldset>
          <fieldset name="directions" id="directions">
            <legend>Directions</legend>
            {directions.map((data, i) => (
              <AddDirection
                key={i}
                direction={data.direction}
                index={i}
                change={this.changeDirection}
                remove={() => this.removeDirection(i)}
              />
            ))}
            <FontAwesomeIcon icon={faPlusCircle} onClick={this.addDirection} />
          </fieldset>
          <div id="button-wrapper">
            <button type="submit">Submit</button>
            <button onClick={this.handleClear}>Clear All</button>
          </div>
        </form>
      </div>
    );
  }
}

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
