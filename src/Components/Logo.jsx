import React from "react";
import logo from "../assets/Logo.png";
import log from "/Logo.png";
export default function Logo({ className = "", ...props }) {
  return (
    <>
      {" "}
      <img
        src={log}
        alt="logo"
        className={`w-10 h-10 ${className}`}
        {...props}
      />{" "}
    </>
  );
}
