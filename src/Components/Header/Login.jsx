import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authenService } from "../../Appwrite";
import { login, logout } from "../../Store/Slices/AuthenSlice";
import { useForm } from "react-hook-form";
import { Input, Button, Logo } from "../index";
// import Link from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

  const loginSubmit = async (data) => {
    setError("");
    try {
      const session = await authenService.login(data);
      if (session) {
        const userData = await authenService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        } else dispatch(logout());
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(loginSubmit)}
        className="w-11/12 md:w-3/4 mx-auto"
      >
        <div className="flex flex-col justify-start items-center w-full sm:w-3/4  lg:w-1/2  shadow-lg font-mono text-2xl min-h-max h-screen mx-auto bg-white rounded-2xl p-5">
          <Logo className="w-32 h-16 mb-5"></Logo>
          <div className="m-3 w-11/12">
            {error && (
              <p className="text-red-600 text-center text-xs">{error}</p>
            )}
            <Input
              placeholder="enter your email"
              type="email"
              className="outline-none px-2 py-1 w-full h-12 rounded-md focus:bg-orange-100 shadow-md text-lg mb-2 focus:outline-none"
              {...register("email", {
                required: "Required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-left text-xs mb-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="m-3 w-11/12">
            <Input
              placeholder="enter your password"
              type="password"
              className="outline-none px-2 py-1 w-full h-12 rounded-md focus:bg-orange-100 shadow-md text-lg mb-2"
              {...register("password", {
                required: "Required",
              })}
            />
            {errors.password && (
              <p className="text-red-600 text-left text-xs ">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            className=" outline-none bg-orange-600 m-3 w-11/12 h-12 rounded-md  shadow-md text-white hover:bg-orange-700 focus:bg-orange-700"
            type="submit text-lg"
            children="Sign In"
          ></Button>
          <h1 className=" text-lg mt-5">
            Don't have any account..
            <span className=" text-orange-500 hover:text-orange-600">
              <Link to="/signup"> sign up</Link>
            </span>
          </h1>
        </div>
      </form>
    </>
  );
}
