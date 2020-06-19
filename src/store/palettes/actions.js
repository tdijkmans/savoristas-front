import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_PALETTES_SUCCESS = "FETCH_PALETTES_SUCCESS";

export const fetchPalettesSuccess = (palettes) => ({
  type: FETCH_PALETTES_SUCCESS,
  payload: palettes,
});

export const fetchPalettes = () => {
  return async (dispatch, getState) => {
    const palettesCount = getState().palettes.length;
    const response = await axios.get(
      `${apiUrl}/palettes?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${palettesCount}`
    );

    dispatch(fetchPalettesSuccess(response.data.Palettes.rows));
  };
};
