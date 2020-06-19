import { combineReducers } from "redux";

import user from "./user/reducer";
import recipes from "./recipes/reducer";
import palettes from "./palettes/reducer";

export default combineReducers({
  user,
  recipes,
  palettes,
});
