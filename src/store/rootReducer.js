import { combineReducers } from "redux";

import user from "./user/reducer";
import recipes from "./recipes/reducer";
import palettes from "./palettes/reducer";
import filteredrecipes from "./filteredrecipes/reducer";

export default combineReducers({
  user,
  recipes,
  palettes,
  filteredrecipes,
});
