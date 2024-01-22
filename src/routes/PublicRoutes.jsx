// publicRoutes.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/layout/Header";
import Home from "@/view/Home";
import Footer from "@/layout/Footer";
import ApexChart from "../view/Home/components/ApexChart";


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
      {
        path: "/charts",
        element: <ApexChart />,
      },
    ],
  },
];

export default publicRoutes;