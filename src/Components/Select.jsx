import React, { useId } from "react";

function Select(
  { options = ["select"], label, className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <>
      <div className="w-full text-center">
        {label && (
          <label htmlFor={id} className="">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={` px-2 py-1 ${className}`}
          {...props}
        >
          {options?.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default React.forwardRef(Select);
