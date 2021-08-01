import axios from "axios";

const url = "https://recipe-box-for-fcc.herokuapp.com/box/";

export const fetchBox = () => axios.get(url);
export const postRecipe = (recipe) => axios.post(url, recipe);
export const updateRecipe = (id, update) => axios.patch(url + id, update);
export const deleteRecipe = (id) => axios.delete(url + id);
