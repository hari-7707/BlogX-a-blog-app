import { ID } from "appwrite";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../index";
import { authenService } from "../../Appwrite";
import { logout } from "../../Store/Slices/AuthenSlice";
export default function Header() {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const authenStatus = useSelector((state) => {
    return state.authen.status;
  });

  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      url: "/",
      isActive: true,
    },
    { name: "Sign In", url: "/login", isActive: !authenStatus },
    { name: "Sign Up", url: "/signup", isActive: !authenStatus },
    { name: "All Posts", url: "/all-posts", isActive: authenStatus },
    { name: "Add Post", url: "/add-post", isActive: authenStatus },
  ];

  return (
    <header className=" sm:flex sm:justify-between shadow-md bg-white sticky z-50 top-0">
      <div className="flex justify-between items-center py-2 px-5 ">
        <div>
          <Logo className=" w-16 h-8"></Logo>
        </div>

        <div className="sm:hidden">
          <button
            onClick={() => {
              setClick((click) => !click);
            }}
            className="hover:text-orange-600 focus:text-orange-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          click ? "block" : "hidden"
        } text-black px-2 py-2 sm:flex sm:items-center text-lg font-medium`}
      >
        {navItems.map((item) => {
          return item.isActive ? (
            <NavLink
              to={item.url}
              key={item.name}
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-600 bg-white" : "text-black"} 
                px-3 py-1 rounded-lg hover:bg-slate-100 `
              }
            >
              {item.name}
            </NavLink>
          ) : null;
        })}
        {authenStatus ? (
          <button
            onClick={() => {
              authenService.logout().then(() => {
                dispatch(logout());
                navigate("/");
              });
            }}
            className={`px-3 py-1 mt-1 rounded-lg hover:bg-slate-100 block sm:mt-0`}
          >
            logout
          </button>
        ) : null}
      </div>
    </header>
  );
}
