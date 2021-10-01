import React from "react";
import "./Header.scss";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <p>
        <NavLink to="/">Need for drive</NavLink>
      </p>
    </div>
    <div className="header__city">
      <LocationIcon />

      <p>Тольятти</p>
    </div>
  </div>
);
export default Header;
