import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants"
import axios from "axios"

export const FETCH_RECIPES_BY_PALETTE_SUCCESS =
  "FETCH_RECIPES_BY_PALETTE_SUCCESS"

export const CLEAR_PALETTE_FILTER = "CLEAR_PALETTE_FILTER"

export const fetchRecipesByPaletteSuccess = (recipes) => ({
  type: FETCH_RECIPES_BY_PALETTE_SUCCESS,
  payload: recipes
})

export const fetchRecipesByPalette = (ingredientIds) => {
  return async (dispatch, getState) => {
    const recipesCount = getState().filteredrecipes.length

    const address = `${apiUrl}/recipes/query?ingredientIds=[${ingredientIds}]&limit=${DEFAULT_PAGINATION_LIMIT}&offset=${recipesCount}`
    const response = await axios.get(address)
    console.log(response.data)
    dispatch(fetchRecipesByPaletteSuccess(response.data.filteredRecipes.rows))
  }
}

export const clearPaletteFilter = () => ({
  type: CLEAR_PALETTE_FILTER,
  payload: []
})
