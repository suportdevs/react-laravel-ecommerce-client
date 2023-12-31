import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from "./pages/ProductList";
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import { store } from './services/store';
import EmailVerification from './pages/EmailVerification';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/:category',
    element: <ProductList />,
  },
  {
    path: '/product/:product_id',
    element: <Product />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/email/verify/:id/:hash',
    element: <EmailVerification />,
  }
]);

root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </>
);

reportWebVitals();