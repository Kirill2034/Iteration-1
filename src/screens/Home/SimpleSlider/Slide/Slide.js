import React from "react";
import "./Slide.scss";
import { Button } from "../../../../components/Button";

const Slide = ({ item }) => {
  const { image, title, subtitle, color } = item;
  return (
    <div className="slide" style={{ backgroundImage: `url(${image})` }}>
      <div className="slide__wrapper">
        <div className="slide__wrapper-content">
          <h3 className="slide__wrapper-content-title">{title}</h3>
          <p className="slide__wrapper-content-subtitle">{subtitle}</p>
          <div className="slide__wrapper-content-button">
            <Button text="Подробнее" color={color} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slide;
