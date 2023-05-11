import { createStore } from "redux";
import rootReducer from "./redux/reducers/index";

const store = createStore(
  rootReducer,
  localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState"))
    : {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  // save a copy to localStorage
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
