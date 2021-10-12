import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  resetError,
  setError,
  setLaptops,
  setLoader,
  setPhones,
} from "./productsActions";

const productItemsReducer = createReducer(
  { phones: [], laptops: [] },
  {
    [setLaptops]: (state, action) => ({
      ...state,
      laptops: [...action.payload],
    }),
    [setPhones]: (state, action) => ({
      ...state,
      phones: [...action.payload],
    }),
  }
);

const productsLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const productsErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const productsReducer = combineReducers({
  items: productItemsReducer,
  loader: productsLoaderReducer,
  error: productsErrorReducer,
});

export default productsReducer;
