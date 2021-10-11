import { combineReducers } from "redux";
import {
  RESETERROR,
  SETERROR,
  SETLAPTOPS,
  SETLOADER,
  SETPHONES,
} from "./productsActions";

const productItemsReducer = (state = { phones: [], laptops: [] }, action) => {
  switch (action.type) {
    case SETLAPTOPS:
      return {
        ...state,
        laptops: [...action.payload],
      };
    case SETPHONES:
      return {
        ...state,
        phones: [...action.payload],
      };

    default:
      return state;
  }
};
const productsLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case SETLOADER:
      return !state;
    default:
      return state;
  }
};
const productsErrorReducer = (state = "", action) => {
  switch (action.type) {
    case SETERROR:
      return action.payload;
    case RESETERROR:
      return "";
    default:
      return state;
  }
};

const productsReducer = combineReducers({
  items: productItemsReducer,
  loader: productsLoaderReducer,
  error: productsErrorReducer,
});

export default productsReducer;