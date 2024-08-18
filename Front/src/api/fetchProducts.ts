import axios from 'axios';

export const fetchProducts = async (callbackToRunAfterFetchingProducts: CallableFunction, requestRoute: string) => {
    try {
      const response = await axios.get(requestRoute);
      callbackToRunAfterFetchingProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };