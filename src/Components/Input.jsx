import React, { useId, useState } from "react";
import { forwardRef } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const [text, setText] = useState("");
  const forId = useId();
  return (
    <>
      {label && <label>{label}</label>}
      <input
        ref={ref}
        type={type}
        className={`bg-white-500  ${className} `}
        id={forId}
        {...props}
      ></input>
    </>
  );
}

export default forwardRef(Input);
