import React from 'react';
import { useAuth } from '@hooks/useAuth';
import '@styles/MyAccount.scss';

const MyAccount = () => {
  const auth = useAuth();
  if (!auth) {
    return null;
  }
	const { address, age, avatar, email, phone, user_name } = auth.user;
	const avatarUser = `http://localhost:3001/static/avatars/${avatar}`;
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <img src={avatarUser} />
            <label htmlFor="name" className="label">
              Name
            </label>
            <p className="value">{user_name}</p>
            <label htmlFor="age" className="label">
              age
            </label>
            <p className="value">{age}</p>
            <label htmlFor="address" className="label">
              Address
            </label>
            <p className="value">{address}</p>
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <p className="value">{phone}</p>
            <label htmlFor="email" className="label">
              Email
            </label>
            <p className="value">{email}</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">*********</p>
          </div>
          <input
            type="submit"
            defaultValue="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
