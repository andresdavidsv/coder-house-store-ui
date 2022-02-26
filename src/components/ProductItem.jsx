import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import btAddCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const [cart, setCart] = useState([]);
  const handleClick = () => {
    setCart([]);
  };
  return (
    <div className="ProductItem">
      <img src={product.thumbnail} alt={product.name} />
      <div className="product-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={btAddCartIcon} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
