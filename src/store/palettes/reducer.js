import { FETCH_PALETTES_SUCCESS, POST_A_PALETTE_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PALETTES_SUCCESS:
      return [...state, ...action.payload];
    case POST_A_PALETTE_SUCCESS:
      return [...state, action.payload];

    default:
      return state;
  }
};
