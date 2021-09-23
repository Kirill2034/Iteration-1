import React from "react";
import "./Button.scss";

function Button(props) {
  return <button className={`button _${props.color}`}>{props.text}</button>;
}

export default Button;
