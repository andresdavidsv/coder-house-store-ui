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
  carts: {
    addCartsProducts: (id) => `${API}/api/carts/${id}/products`,
    addCarts: `${API}/api/carts`,
    deleteCarts: (id) => `${API}/api/carts/${id}/`,
  },
  files: {
    addImage: `${API}/api/files/upload/`,
  },
};

export default endPoints;
