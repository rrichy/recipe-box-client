import axios from "axios";

const url = "http://localhost:5000/";

export const fetchBox = () => axios.get(url);
export const postRecipe = (recipe) => axios.post(url, recipe);
