import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeContent.scss";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";

const HomeContent = () => (
  <div className="home-content">
    <Header />
    <div className="home-content__main">
      <div className="home-content__main-title">
        <p>Каршеринг</p>
      </div>
      <div className="home-content__main-subtitle">
        <p>Need for drive</p>
      </div>
      <div className="home-content__main-description">
        <p>Поминутная аренда авто твоего города</p>
      </div>

      <div className="home-content__main-button">
        <NavLink to="/order">
          <Button text="Забронировать" />
        </NavLink>
      </div>
    </div>
    <div className="home-content__footer">
      <div className="home-content__footer-company">
        <p>© 2016-2019 «Need for drive»</p>
      </div>
      <div className="home-content__footer-phone">
        <p>8 (495) 234-22-44</p>
      </div>
    </div>
  </div>
);

export default HomeContent;
