import React from "react";

function Button({ children, type = "button", className = "", ...props }) {
  return (
    <>
      <button
        className={`px-4 py-1 rounded-md bg-blue-700 ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
