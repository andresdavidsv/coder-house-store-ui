import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import '@styles/Menu.scss';

const Menu = () => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/orders" className="title">
            My orders
          </Link>
        </li>
        <li>
          <Link to="/account">My account</Link>
        </li>
        <li>
          <div onClick={handleLogout}>Sign out</div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
