import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  removeFromCartByID,
  createOrder,
  setLoader,
  setError,
  resetError,
} from "./cartActions";

const cartItemsReducer = createReducer([], {
  [addToCart]: (state, action) => [...state, action.payload],
  [removeFromCartByID]: (state, action) => [
    ...state.filter((cartItem) => cartItem.id !== action.payload),
  ],
  [createOrder]: () => [],
});

const cartLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const cartErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const cartReducer = combineReducers({
  items: cartItemsReducer,
  loader: cartLoaderReducer,
  error: cartErrorReducer,
});

export default cartReducer;
