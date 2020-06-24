import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_RECIPES_BY_PALETTE_SUCCESS =
  "FETCH_RECIPES_BY_PALETTE_SUCCESS";

export const CLEAR_PALETTE_FILTER = "CLEAR_PALETTE_FILTER";

export const fetchRecipesByPaletteSuccess = (recipes) => ({
  type: FETCH_RECIPES_BY_PALETTE_SUCCESS,
  payload: recipes,
});

export const fetchRecipesByPalette = (ingredientIds) => {
  return async (dispatch, getState) => {
    const address = `${apiUrl}/recipes/query?ingredients=[${ingredientIds}]`;
    const response = await axios.get(address);

    dispatch(fetchRecipesByPaletteSuccess(response.data.result));
  };
};

export const clearPaletteFilter = () => ({
  type: CLEAR_PALETTE_FILTER,
  payload: [],
});
