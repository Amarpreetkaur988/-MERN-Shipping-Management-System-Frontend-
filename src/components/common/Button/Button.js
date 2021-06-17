import React from "react";

const Button = ({ value, className, type, handleClick }) => {
  return (
    <button className={className} type={type} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
