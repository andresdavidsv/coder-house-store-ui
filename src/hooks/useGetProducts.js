import { useEffect, useState } from 'react';
import endPoints from '@services/api/';
import axios from 'axios';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios({
      url: endPoints.products.getProducts,
      method: 'get',
    });
    setProducts(response.data.data);
  }, []);

  return {
    products,
  };
};

export default useGetProducts;
