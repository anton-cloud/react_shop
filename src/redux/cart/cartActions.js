import { createAction } from "@reduxjs/toolkit";

const ADDTOCART = "addToCart";
const REMOVEFROMCARTBYID = "removeFromCartByID";
const CREATEORDER = "createOrder";
const SETLOADER = "setLoader";
const SETERROR = "setError";
const RESETERROR = "resetError";

export {
  ADDTOCART,
  REMOVEFROMCARTBYID,
  CREATEORDER,
  SETLOADER,
  SETERROR,
  RESETERROR,
};

const addToCart = createAction(ADDTOCART);
const removeFromCartByID = createAction(REMOVEFROMCARTBYID);
const createOrder = createAction(CREATEORDER);
const setLoader = createAction(SETLOADER);
const setError = createAction(SETERROR);
const resetError = createAction(RESETERROR);

export {
  addToCart,
  removeFromCartByID,
  createOrder,
  setLoader,
  setError,
  resetError,
};
