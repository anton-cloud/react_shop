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

const addToCart = (product) => ({ type: ADDTOCART, payload: product });
const removeFromCartByID = (id) => ({ type: REMOVEFROMCARTBYID, payload: id });
const createOrder = () => ({ type: CREATEORDER });
const setLoader = () => ({ type: SETLOADER });
const setError = (error) => ({ type: SETERROR, payload: error });
const resetError = () => ({ type: RESETERROR });

export {
  addToCart,
  removeFromCartByID,
  createOrder,
  setLoader,
  setError,
  resetError,
};