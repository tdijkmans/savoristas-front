import { FETCH_SPELLINGS_SUCCESS } from "./actions"

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPELLINGS_SUCCESS:
      return [...state, ...action.payload]

    default:
      return state
  }
}
