import {
  FETCH_RECIPES_BY_PALETTE_SUCCESS,
  CLEAR_PALETTE_FILTER
} from "./actions"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_BY_PALETTE_SUCCESS:
      if (action.payload) {
        return [...action.payload]
      } else {
        return state
      }
    case CLEAR_PALETTE_FILTER: {
      return []
    }
    default:
      return state
  }
}
