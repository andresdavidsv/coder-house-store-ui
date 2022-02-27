import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@hooks/useAuth';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  const navigate = useNavigate();
  const form = useRef(null);
  const auth = useAuth();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      address: formData.get('address'),
      age: formData.get('age'),
      phone: formData.get('phone'),
      user_name: formData.get('user_name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    auth.signUp(data).then(() => {
      navigate('/login');
    });
	};

	const handleLogin = () => {
		navigate('/login');
	}

  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form" ref={form}>
          <div>
            <label htmlFor="user_name" className="label">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="User"
              className="input input-name"
            />
            <label htmlFor="user_name" className="label">
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Street"
              className="input input-name"
            />
            <label htmlFor="age" className="label">
              Age
            </label>
            <input type="number" name="age" className="input input-name" />
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              placeholder="3000000000"
              className="input input-name"
            />
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="account@example.com"
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <button
            type="button"
            className="primary-button login-button"
            onClick={handleSubmit}>
            Create Account
          </button>
          <button
            className="secondary-button signup-button"
            onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
