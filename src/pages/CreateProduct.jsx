import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '@services/api/products';
import '@styles/CreateAccount.scss';

const CreateProduct = () => {
  const navigate = useNavigate();
  const form = useRef(null);

  const handleCreate = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('product_name'),
      price: formData.get('price'),
      thumbnail: formData.get('thumbnail'),
    };
    addProduct({produt: data}).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">New Product</h1>
        <form action="/" className="form" ref={form}>
          <div>
            <label htmlFor="product_name" className="label">
              Name
            </label>
            <input
              type="text"
              name="product_name"
              placeholder="Product Name"
              className="input input-name"
            />
            <label htmlFor="price" className="label">
              Price
            </label>
            <input type="number" name="price" className="input input-name" />
            <label htmlFor="thumbnail" className="label">
              Thumbnail
            </label>
            <input
              type="text"
              name="thumbnail"
              placeholder="http://imag.com"
              className="input input-email"
            />
          </div>
          <button
            type="button"
            className="primary-button login-button"
            onClick={handleCreate}>
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
