import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { editProduct } from '@services/api/products';
import axios from 'axios';
import endPoints from '@services/api/';
import '@styles/CreateAccount.scss';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const form = useRef(null);

  useEffect(async () => {
    await axios({
      url: endPoints.products.getProduct(id),
      method: 'get',
    }).then((res) => {
      setProduct(res.data.data);
    });
  }, []);

  if (!product) {
    return null;
  }

  const handleEdit = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('product_name'),
      price: formData.get('price'),
      thumbnail: formData.get('thumbnail'),
    };
    editProduct(id, { produt: data }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">Edit Product</h1>
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
              defaultValue={product.name}
            />
            <label htmlFor="price" className="label">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="input input-name"
              defaultValue={product.price}
            />
            <label htmlFor="thumbnail" className="label">
              Thumbnail
            </label>
            <input
              type="text"
              name="thumbnail"
              placeholder="http://imag.com"
              className="input input-email"
              defaultValue={product.thumbnail}
            />
          </div>
          <button
            type="button"
            className="primary-button login-button"
            onClick={handleEdit}>
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
