import React from "react";
import "./CarItem.scss";
import cn from "classnames";

const CarItem = ({ item, selected, onClick }) => {
  return (
    <div
      className={cn("car-item", { selected })}
      onClick={() => onClick(item.id)}
    >
      <div className="car-item__title">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <div className="car-item__images">
        <img src={item.image} alt="Not found" />
      </div>
    </div>
  );
};

export default CarItem;
