import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';

import closeIcon from '@icons/icon_close.png';

const OrderItem = (props) => {
  const { product, indexValue } = props;
  const { removeFromCart } = useContext(AppContext);
  const handleRemove = (indexValue) => {
    removeFromCart(indexValue);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.thumbnail} alt={product.name} />
      </figure>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <img
        src={closeIcon}
        alt="close"
        onClick={() => handleRemove(indexValue)}
      />
    </div>
  );
};

export default OrderItem;
