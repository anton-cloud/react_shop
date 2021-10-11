const SETPHONES = "getPhones";
const SETLAPTOPS = "getLaptops";
const SETLOADER = "setLoader";
const SETERROR = "setError";
const RESETERROR = "resetError";

export { SETERROR, SETLOADER, RESETERROR, SETPHONES, SETLAPTOPS };

const setLoader = () => ({ type: SETLOADER });
const setError = (error) => ({ type: SETERROR, payload: error });
const resetError = () => ({ type: RESETERROR });
const setPhones = (phones) => ({ type: SETPHONES, payload: phones });
const setLaptops = (laptops) => ({ type: SETLAPTOPS, payload: laptops });

export { setError, resetError, setLoader, setPhones, setLaptops };