import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import { AuthenLayout } from "./Components/index.js";

import AddPost from "./Pages/AddPost";
import Signup from "./Pages/Signup";
import EditPost from "./Pages/EditPost";

import Post from "./Pages/Post";

import AllPosts from "./Pages/AllPosts";
import Login from "./Pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthenLayout authentication={false}>
            <Login />
          </AuthenLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthenLayout authentication={false}>
            <Signup />
          </AuthenLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthenLayout authentication children={<AllPosts />}></AuthenLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthenLayout authentication>
            <AddPost />
          </AuthenLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthenLayout authentication>
            <EditPost />
          </AuthenLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
