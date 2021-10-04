const { default: axios } = require("axios");

const BASE_URL = "https://react-shop-45dea-default-rtdb.firebaseio.com/";

export const createNewAdv = async(category, newAdv) => {
  try {
    const response =  await axios.post(BASE_URL + `advertisements/${category}.json`, newAdv)
  return response.data;
  } catch (error) {
    console.log(error);
  }

}

export const deleteAdv  = async(category, id) => {
  try {
    const response = await axios.delete(BASE_URL + `advertisements/${category}/${id}.json`)
  return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const createNewOrder = async(order) => {
  try {
    const response = await axios.post(BASE_URL + 'orders.json', order)
  return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getAllAdvByCategory  = async(category) => {
  try {
    const response = await axios.get(BASE_URL + `advertisements/${category}.json`);
  return response;
  } catch (error) {
    console.log(error);
  }
}