import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <p>
        <NavLink to="/">Need for drive</NavLink>
      </p>
    </div>
    <div className="header__city">
      <p>Тольятти</p>
    </div>
  </div>
);
export default Header;
