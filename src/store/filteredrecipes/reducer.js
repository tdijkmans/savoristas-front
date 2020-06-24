import {
  FETCH_RECIPES_BY_PALETTE_SUCCESS,
  CLEAR_PALETTE_FILTER,
} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_BY_PALETTE_SUCCESS:
      return [...action.payload];
    case CLEAR_PALETTE_FILTER: {
      return [];
    }
    default:
      return state;
  }
};
