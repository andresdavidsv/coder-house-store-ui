const API = 'http://localhost:3001';

const endPoints = {
  auth: {
    login: `${API}/api/auth/sign-in`,
    signup: `${API}/api/auth/sign-up`,
  },
  products: {
    getProduct: (id) => `${API}/api/products/${id}/`,
    getProducts: `${API}/api/products`,
    addProducts: `${API}/api/products`,
    updateProducts: (id) => `${API}/api/products/${id}/`,
    deleteProducts: (id) => `${API}/api/products/${id}/`,
  },
  files: {
    addImage: `${API}/api/files/upload/`,
  },
};

export default endPoints;
