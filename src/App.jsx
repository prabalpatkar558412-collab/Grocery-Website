import React from "react";
import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProduct from "./components/AllProduct/AllProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seaFood",
          element: <SeaFood />,
        },
        {
          path: "/allProduct",
          element: <AllProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
