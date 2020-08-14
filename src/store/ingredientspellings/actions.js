import { apiUrl } from "../../config/constants"
import axios from "axios"

export const FETCH_SPELLINGS_SUCCESS = "FETCH_SPELLINGS_SUCCESS"

export const fetchSpellingsSuccess = (spellings) => ({
  type: FETCH_SPELLINGS_SUCCESS,
  payload: spellings
})

export const fetchSpellings = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/ingredientspellings`)

    dispatch(fetchSpellingsSuccess(response.data.ingredientSpellings))
  }
}
