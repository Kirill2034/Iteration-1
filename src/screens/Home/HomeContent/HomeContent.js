import React from "react";
import "./HomeContent.scss";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg";
import { Button } from "../../../components/Button";

const HomeContent = () => (
  <div className="home-content">
    <div className="home-content__header">
      <div className="home-content__header-logo">
        <p>Need for drive</p>
      </div>
      <div className="home-content__header-city">
        <LocationIcon />

        <p>Тольятти</p>
      </div>
    </div>
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
        <Button text="Забронировать" />
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
