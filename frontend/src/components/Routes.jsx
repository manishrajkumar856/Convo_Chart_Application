import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignupPage from "../pages/AuthenticationPages/SignupPage";
import LoginPage from "../pages/AuthenticationPages/LoginPage";
import HomePage from "../pages/HomePage.jsx/HomePage";
import VerifyForm from "../pages/AuthenticationPages/VerifyForm";
import SignupForm from "../pages/AuthenticationPages/SignupForm";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import FriendPage from "../pages/ChartPage/FriendPage";
import ChatPage from "../pages/ChartPage/ChatPage";
import ShowFriendList from "../pages/ChartPage/ShowFriendList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/signup",
        element: <SignupPage />,
        children: [
          { index: true, element: <SignupForm /> }, // ✅ /signup
          { path: "verify", element: <VerifyForm /> },
        ],
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/notification", element: <NotificationPage /> },
      { path: "/friends", element: <FriendPage />, 
        children: [
          { index: true, element: <ShowFriendList/> }, // ✅ /signup
          { path: 'chat/:id', element: <ChatPage />}
        ]
      },
    ],
  },
]);
