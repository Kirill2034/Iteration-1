import React from "react";
import "./Button.scss";

const Button = ({ text, color, ...rest }) => {
  return (
    <button className={`button ${color}`} {...rest}>
      {text}
    </button>
  );
};

export default Button;
