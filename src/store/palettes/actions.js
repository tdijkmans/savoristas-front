import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants"
import axios from "axios"
import { selectUser } from "../user/selectors"

export const FETCH_PALETTES_SUCCESS = "FETCH_PALETTES_SUCCESS"
export const POST_A_PALETTE_SUCCESS = "POST_A_PALETTE_SUCCESS"

export const fetchPalettesSuccess = (palettes) => ({
  type: FETCH_PALETTES_SUCCESS,
  payload: palettes
})

export const fetchPalettes = () => {
  return async (dispatch, getState) => {
    const palettesCount = getState().palettes.length
    const response = await axios.get(
      `${apiUrl}/palettes?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${palettesCount}`
    )

    dispatch(fetchPalettesSuccess(response.data.palettes.rows))
  }
}

export const addThisPalette = (newPalette) => ({
  type: POST_A_PALETTE_SUCCESS,
  payload: newPalette
})

export const postPalette = (name, description, ingredientList) => {
  return async (dispatch, getState) => {
    const { token, id } = selectUser(getState())

    const response = await axios.post(
      `${apiUrl}/palettes/`,
      {
        name,
        description,
        ingredientList,
        userId: id
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    dispatch(addThisPalette(response.data.Palette))
  }
}
