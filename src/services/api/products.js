import axios from 'axios';
import Cookie from 'js-cookie';
import endPoints from '@services/api';

const addProduct = async (body) => {
  const token = Cookie.get('token');
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    endPoints.products.addProducts,
    body.produt,
    config
  );
  return response.data;
};

const deleteProduct = async (id) => {
  const token = Cookie.get('token');
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(
    endPoints.products.deleteProducts(id),
    config
  );
  return response.data;
};

const editProduct = async (id, body) => {
  const token = Cookie.get('token');
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    endPoints.products.updateProducts(id),
    body.produt,
    config
  );
  return response.data;
};

export { addProduct, deleteProduct, editProduct };
