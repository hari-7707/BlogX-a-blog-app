import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenService } from "./Appwrite";
import { login, logout } from "./Store/Slices/AuthenSlice";
import { Outlet } from "react-router-dom";
import { Header, Footer, Signup, Select } from "./Components/index";
import { Editor } from "@tinymce/tinymce-react";
import PostForm from "./Components/PostForm";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const select = useSelector((state) => {
    return state.authen.userData;
  });
  useEffect(() => {
    authenService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
          console.log(select);
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const logoutHandler = () => {
    authenService.logout().then(dispatch(logout()));
  };

  const [val, setVal] = useState("");

  return loading ? (
    <>
      <h1 className=" text-center">please wait page is loading......</h1>
    </>
  ) : (
    <div className=" bg-slate-50 lg:p-10 ">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
