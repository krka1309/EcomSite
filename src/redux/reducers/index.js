import { combineReducers } from "redux";
import addToCartReducer from "./idReducer";
const reducer = combineReducers({
  allProducts: addToCartReducer,
});

export default reducer;
