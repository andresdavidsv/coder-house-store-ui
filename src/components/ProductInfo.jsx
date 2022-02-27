import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import endPoints from '@services/api/';
import AppContext from '@context/AppContext';
import '@styles/ProductInfo.scss';

import btAddCartIcon from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const { addToCart } = useContext(AppContext);
  useEffect(async () => {
    await axios({
      url: endPoints.products.getProduct(id),
      method: 'get',
    }).then((res) => {
      setProduct(res.data.data);
    });
  }, []);
  const handleClick = (item) => {
    addToCart(item);
  };
  if (!product) {
    return null;
  }
  return (
    <>
      <img src={product.thumbnail} alt={product.name} />
      <div className="ProductInfo">
        <p>${product.price}</p>
        <p>{product.name}</p>
        <button
          className="primary-button add-to-cart-button"
          onClick={() => handleClick(product)}>
          <img src={btAddCartIcon} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
