import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";

export const fetchRecipesSuccess = (recipes) => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes,
});

export const fetchRecipes = () => {
  return async (dispatch, getState) => {
    const recipesCount = getState().recipes.length;
    const response = await axios.get(
      `${apiUrl}/recipes?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${recipesCount}`
    );

    dispatch(fetchRecipesSuccess(response.data.recipes.rows));
  };
};
