import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useRoutes,
  useSearchParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProfilePage from "./pages/ProfilePage";
import FollowersList from "./pages/FollowersList";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Sidebar />
        <div class="sm:ml-64  mt-14">
          <Outlet />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ProfilePage />,
        },
        {
          path: "/followers",
          element: <FollowersList />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
