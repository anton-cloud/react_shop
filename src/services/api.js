import axios from "axios";

const BASE_URL = "https://react-shop-45dea-default-rtdb.firebaseio.com/";

// додати позицію на FireBase
export const createNewAdv = async(product) => {
  try {
    console.log('axios', product);
    const response =  await axios.post(BASE_URL + `advertisements/${product.category}.json`, product)
  return response.data.name;
  } catch (error) {
    console.log(error);
  }
}

export const getProductsByCategory = async(category) => {
  try {
    const response = await axios.get(BASE_URL + `advertisements/${category}.json`);
    if(response.data) {
      const keys = Object.keys(response.data);
      const products = keys.map((key) => ({
        id: key,
        ...response.data[key],
      }))
    return products;
    }
  } catch (error) {
    console.log(error);    
  }
}

// export const deleteAdv  = async(category, id) => {
//   try {
//     const response = await axios.delete(BASE_URL + `advertisements/${category}/${id}.json`)
//   return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
// ==============
// export const createNewOrder = async(order) => {
//   try {
//     const response = await axios.post(BASE_URL + 'orders.json', order)
//   return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
// ================
// export const getAllAdvByCategory  = async(category) => {
//   try {
//     const response = await axios.get(BASE_URL + `advertisements/${category}.json`);
//   return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

