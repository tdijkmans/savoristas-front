import { FETCH_RECIPES_SUCCESS } from "./actions";
// import { FETCH_RECIPES_BY_PALETTE_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      return [...state, ...action.payload];
    // case FETCH_RECIPES_BY_PALETTE_SUCCESS:
    //   return [...action.payload];

    default:
      return state;
  }
};
