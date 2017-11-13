import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = ({ type, className, children, onClick, value }) => (
  <button
    style={{margin: "15px"}}
    onClick={onClick}
    className={`btn btn-${type ? type : "default"}${className
      ? " " + className
      : ""}`}
      value={value}
  >
    {children}
  </button>
);

export default Button;
