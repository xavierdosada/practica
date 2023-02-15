import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Profile from "./components/Profile";
import { ContextProvider } from './context/userContext';
import Products from './components/Products';
import DetailProduct from './components/DetailsProduct';
import { ProductsProvider } from './context/productsContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/detailsProduct",
    element: <DetailProduct/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>  
    </ContextProvider>
  </React.StrictMode>
);

