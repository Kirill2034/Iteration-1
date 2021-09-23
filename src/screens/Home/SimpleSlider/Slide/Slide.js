import React from "react";
import "./Slide.scss";
import { Button } from "../../../../components/Button";

function Slide(props) {
  const { image, title, subtitle, color } = props.item;
  return (
    <div className="slide" style={{ backgroundImage: `url(${image})` }}>
      <div className="slide__content">
        <h3 className="slide__content-title">{title}</h3>
        <p className="slide__content-subtitle">{subtitle}</p>
        <div className="slide__content-button">
          <Button text="Подробнее" color={color} />
        </div>
      </div>
    </div>
  );
}
export default Slide;
