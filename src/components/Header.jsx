import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '@styles/Header.scss';

import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import { useAuth } from '@hooks/useAuth';

import iconMenu from '@icons/icon_menu.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import logo from '@logos/logo_yard_sale.svg';

import AppContext from '@context/AppContext';

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrder] = useState(false);
  const { state } = useContext(AppContext);
  const auth = useAuth();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleOrder = () => {
    setToggleOrder(!toggleOrders);
  };
  const handleLogin = () => {
    navigate('/login');
  };
  const handleMain = () => {
    navigate('/');
  };
  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img
          src={logo}
          alt="logo"
          className="nav-logo"
          onClick={() => handleMain()}
        />
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/orders">My Orders</Link>
          </li>
          <li>
            <Link to="/createproduct">Create Product</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          {auth.user ? (
            <li className="navbar-email" onClick={() => handleToggle()}>
              {auth.user.email}
            </li>
          ) : (
            <li className="navbar-email" onClick={() => handleLogin()}>
              Login
            </li>
          )}
          <li
            className="navbar-shopping-cart"
            onClick={() => handleToggleOrder()}>
            <img src={iconShoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
