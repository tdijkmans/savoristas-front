import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

import { selectUser } from "../user/selectors";

export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const POST_A_RECIPE_SUCCESS = "POST_A_RECIPE_SUCCESS";

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

export const postRecipe = (
  image,
  name,
  description,
  recipeIngredientList,
  recipeYield,
  instructions,
  cookTime
) => {
  return async (dispatch, getState) => {
    const { token, id } = selectUser(getState());

    const response = await axios.post(
      `${apiUrl}/recipes/`,
      {
        image,
        name,
        description,
        recipeIngredientList,
        recipeYield,
        instructions,
        cookTime,
        userId: id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response.data);
  };
};
