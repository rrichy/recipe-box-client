import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

import { postRecipe, updateRecipe } from "../../actions/recipes";
import { editRecipe, changePage } from "../../actions/utils";
import "../styles/css/AddRecipe.css";

const AddRecipe = () => {
  const [data, editData] = useState({
    title: "",
    description: "",
    image: "",
    creator: "",
    ingredients: [""],
    directions: [""],
  });

  const currentId = useSelector((state) => state.utils.id);
  const recipe =
    useSelector((state) => state.recipes.find((r) => r._id === currentId)) ||
    null;

  const page = useSelector((state) => state.utils.currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (recipe) editData(recipe);
  }, [currentId, recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateRecipe(currentId, data));
    } else {
      dispatch(postRecipe(data));
    }

    clear(e);
  };

  const clear = (e) => {
    e.preventDefault();
    editData({
      title: "",
      description: "",
      image: "",
      creator: "",
      ingredients: [""],
      directions: [""],
    });

    dispatch(editRecipe(null));
  };

  return (
    <div
      className={
        "add-recipe" + (page === "add-recipe" ? " add-recipe--active" : "")
      }
    >
      <a href="#" onClick={() => dispatch(changePage("add-recipe"))}>
        {currentId ? "Edit Recipe" : "Add Recipe"}
      </a>
      <form onSubmit={handleSubmit}>
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
        <label className="form-input-file-container">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => editData({ ...data, image: base64 })}
          />
          <span>Choose Image</span>
        </label>
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
        <fieldset>
          <legend>Ingredients</legend>
          <div className="dynamic-container">
            <div className="dynamic-container__element">
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
            </div>
            <div
              className="dynamic-container__add-button"
              onClick={() => {
                const ingredients = [...data.ingredients, ""];
                editData({ ...data, ingredients });
              }}
            >
              +
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Directions</legend>
          <div className="dynamic-container">
            <div className="dynamic-container__element">
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
            </div>
            <div
              className="dynamic-container__add-button"
              onClick={() => {
                const directions = [...data.directions, ""];
                editData({ ...data, directions });
              }}
            >
              +
            </div>
          </div>
        </fieldset>
        <div id="button-wrapper">
          <button type="submit">Submit</button>
          <button onClick={clear}>Clear All</button>
        </div>
      </form>
    </div>
  );
};

const AddIngredient = ({ ingredient, change, index, remove }) => {
  return (
    <label>
      <input
        type="text"
        placeholder="Enter Ingredient"
        value={ingredient}
        onChange={(e) => change(e, index)}
      />
      <FontAwesomeIcon icon={faMinusCircle} onClick={remove} />
    </label>
  );
};

const AddDirection = ({ direction, change, index, remove }) => {
  return (
    <div className="dynamic-container__directions">
      <textarea
        placeholder={`Step ${index + 1}`}
        value={direction}
        onChange={(e) => change(e, index)}
      ></textarea>
      <FontAwesomeIcon icon={faMinusCircle} onClick={remove} />
    </div>
  );
};

export default AddRecipe;
