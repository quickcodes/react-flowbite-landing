// publicRoutes.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/layout/Header";
import Home from "@/view/Home";
import Footer from "@/layout/Footer";


const PublicLayout = ({ children }) => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default publicRoutes;