import axios from 'axios';
import Cookie from 'js-cookie';
import endPoints from '@services/api';

const addCart = async (body) => {
  const token = Cookie.get('token');
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(endPoints.carts.addCarts, body, config);
  return response.data;
};

const addCartProduct = async (id, body) => {
  const token = Cookie.get('token');
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    endPoints.carts.addCartsProducts(id),
    body,
    config
  );
  return response.data;
};

export { addCart, addCartProduct };
