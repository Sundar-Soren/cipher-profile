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
import ChangePasswordModel from "./components/ChangePasswordModel";
import InterestModel from "./components/InterestModel";
import newRequest from "./utils/newRequest";

const App = () => {
  const [showModel, setShowModel] = useState(false);
  const [showInterestModel, setShowInterestModel] = useState(false);

  const [user, setUser] = useState({});
  const makeUserLogin = async () => {
    try {
      const { data } = await newRequest.post("login", {
        email: "sundarsoren@gmail.com",
        password: "12345678",
      });
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const amILogin = async () => {
    try {
      const { data } = await newRequest.get("me");
      setUser(data.user);
    } catch (error) {
      console.log(error.response.data.status);
      if (error.response?.data?.status === false) makeUserLogin();
    }
  };

  useEffect(() => {
    amILogin();
  }, []);
  const Layout = () => {
    return (
      <>
        {showModel && <ChangePasswordModel setShowModel={setShowModel} />}
        {showInterestModel && (
          <InterestModel
            setShowInterestModel={setShowInterestModel}
            user={user}
            setUser={setUser}
          />
        )}
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
          element: (
            <ProfilePage
              user={user}
              setUser={setUser}
              setShowModel={setShowModel}
              setShowInterestModel={setShowInterestModel}
            />
          ),
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
