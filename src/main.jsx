import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./customer/components/MainLayout/MainLayout.jsx";
import Homepage from "./customer/components/Navigation/HomeCarousel/Pages/Homepage/Homepage.jsx";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import Products from "./customer/components/Products/Products.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import Order from "./customer/components/Order/Order.jsx";
import OrderDetails from "./customer/components/Order/OrderDetails.jsx";
import {store} from './redux/store.js'
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:productid",
        element: <ProductDetails />,
      },
      { path: "/:levelOne/:levelTwo/:levelThree", element: <Products /> },
      {
        path: "/account/order",
        element: <Order />,
      },
      {
        path: "/account/order/:orderId",
        element: <OrderDetails />,
      },
      {
        path: "login",
        element: <Homepage />,
      },
      {
        path: "register",
        element: <Homepage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
