import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import endPoints from '@services/api/';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios({
      url: endPoints.auth.login,
      method: 'post',
      auth: {
        password,
        username: email,
      },
      data: {
        apiKeyToken:
          '0191443cb26a84ab06f7663a77d814aad3217176b1f4a156fad9eeaf2bfe8129',
      },
      options,
    });
    if (data.token) {
      const token = data.token;
      Cookie.set('token', token, { expires: 5 });
      const decoded = jwt_decode(token);
      localStorage.setItem('scopes', JSON.stringify(decoded.scopes));
      setUser(data.user);
      axios.defaults.headers.Authorization = `Bear ${token}`;
    }
  };
  const signUp = async (userData) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    await axios({
      url: endPoints.auth.signup,
      method: 'post',
      data: {
        ...userData,
      },
      options,
    });
  };

  const logout = () => {
    Cookie.remove('token');
    localStorage.clear();
    setUser(null);
    delete axios.defaults.headers.authorization;
    window.location.href = '/login';
  };

  return {
    user,
    signIn,
    signUp,
    logout,
  };
}
