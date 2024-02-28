import React, { useState } from "react";
import { Input, Button, Logo } from "../index";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitSignIn = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submitSignIn)}
        className=" min-h-10/12
         w-11/12 md:w-3/4 mx-auto"
      >
        <div className="flex flex-col justify-start items-center w-full sm:w-3/4  lg:w-1/2 shadow-lg  font-mono text-2xl  mx-auto bg-white p-5 rounded-2xl">
          <Logo className=" w-32 h-16 mb-5"></Logo>
          <h1 className=" text-lg mb-5 text-center">
            already have any account..
            <span className=" text-orange-500 hover:text-orange-600">
              <Link to="/login"> sign In</Link>
            </span>
          </h1>
          <div className="m-3 w-11/12">
            <Input
              placeholder="Full Name"
              type="text"
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
          <div className="m-3 w-11/12">
            <Input
              placeholder="Email"
              type="email"
              className="outline-none px-2 py-1 w-full h-12 rounded-md focus:bg-orange-100 shadow-md text-lg mb-2"
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
              placeholder="Password"
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
        </div>
      </form>
    </>
  );
}
