import { createAction } from "@reduxjs/toolkit";

const SETPHONES = "getPhones";
const SETLAPTOPS = "getLaptops";
const SETLOADER = "setLoader";
const SETERROR = "setError";
const RESETERROR = "resetError";

export { SETERROR, SETLOADER, RESETERROR, SETPHONES, SETLAPTOPS };

const setLoader = createAction(SETLOADER);
const setError = createAction(SETERROR);
const resetError = createAction(RESETERROR);
const setPhones = createAction(SETPHONES);
const setLaptops = createAction(SETLAPTOPS);

export { setError, resetError, setLoader, setPhones, setLaptops };
