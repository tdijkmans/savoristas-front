import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";

export const fetchRecipeSuccess = (recipe) => ({
  type: FETCH_RECIPE_SUCCESS,
  payload: recipe,
});

export const fetchRecipe = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/recipes/${id}`);
    dispatch(fetchRecipeSuccess(response.data.recipe));
  };
};
