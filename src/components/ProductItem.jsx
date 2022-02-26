import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';

import btAddCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className="ProductItem">
      <img src={product.thumbnail} alt={product.name} />
      <div className="product-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={btAddCartIcon} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
