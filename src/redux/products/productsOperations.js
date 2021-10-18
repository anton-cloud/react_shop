import { getProductsByCategory } from "../../services/api";
import { setError, setLoader } from "./productsActions";

export const getAllAdvByCategoryOperation =
  (category, callback) => async (dispatch) => {
    dispatch(setLoader());
    try {
      const response = await getProductsByCategory(category);
      dispatch(callback(response));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoader());
    }
  };
