import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import { addCart, addCartProduct } from '@services/api/carts';
import { useNavigate } from 'react-router-dom';
import '@styles/MyOrder.scss';

import arrowIcon from '@icons/flechita.svg';

const MyOrder = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    addCart().then((res) => {
      addCartProduct(res.data, state.cart);
      removeFromCart();
      window.location.reload();
    });
  };
  const sumTotal = () => {
    const reducer = (accum, currentValue) => accum + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrowIcon} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product, index) => (
          <OrderItem
            product={product}
            key={`orderItem-${product.id}-${index}`}
            indexValue={index}
          />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button" onClick={() => handleCheckout()}>
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default MyOrder;
