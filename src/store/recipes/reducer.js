import { FETCH_PALETTES_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PALETTES_SUCCESS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
