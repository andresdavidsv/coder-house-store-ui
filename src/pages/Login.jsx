import React, { useRef } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import '@styles/Login.scss';
import { useAuth } from '@hooks/useAuth';

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const navigate = useNavigate();
  const form = useRef(null);
  const auth = useAuth();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    auth.signIn(data.email, data.password).then(() => {
      navigate('/account');
    });
  };

  const handleSignup = () => {
    navigate('/signup');
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="account@example.cm"
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
          <button
            type="button"
            className="primary-button login-button"
            onClick={handleSubmit}>
            Log in
          </button>
          <Link to="/">Forgot my password</Link>
        </form>
        <button
          className="secondary-button signup-button"
          onClick={handleSignup}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
