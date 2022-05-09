import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import ProductInfo from '@components/ProductInfo';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import { ProviderAuth } from '@hooks/useAuth';
import '@styles/global.css';
import CreateProduct from '@pages/CreateProduct';
import EditProduct from '@pages/EditProduct';


const App = () => {
  let scopes;
  window.addEventListener('storage', () => {
    window.location.reload();
    scopes = localStorage.getItem('scopes');
  });
  const initialState = useInitialState();
  return (
    <ProviderAuth>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/password-recovery"
                element={<PasswordRecovery />}
              />
              <Route exact path="/new-password" element={<NewPassword />} />
              <Route exact path="/signup" element={<CreateAccount />} />
              <Route exact path="/account" element={<MyAccount />} />
              {scopes && (
                <>
                  <Route exact path="/checkout" element={<Checkout />} />
                  <Route exact path="/send-email" element={<SendEmail />} />
                </>
              )}
              {scopes &&
                JSON.parse(scopes).find(
                  (scope) => scope === 'create:products'
                ) && (
                  <Route
                    exact
                    path="/createproduct"
                    element={<CreateProduct />}
                  />
                )}
              {scopes &&
                JSON.parse(scopes).find(
                  (scope) => scope === 'update:products'
                ) && (
                  <Route
                    exact
                    path="/editproduct/:id"
                    element={<EditProduct />}
                  />
                )}
              {scopes &&
                JSON.parse(scopes).find((scope) => scope === 'read:carts') && (
                  <Route exact path="/orders" element={<Orders />} />
                )}
              <Route exact path="/products/:id" element={<ProductInfo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </ProviderAuth>
  );
};

export default App;
