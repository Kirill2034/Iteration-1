import React, { useState } from "react";
import "./Model.scss";
import { Radio } from "../../../components/Radio";
import { CarItem } from "../../../components/CarItem";
import car1 from "../../../assets/images/car1.png";
import car2 from "../../../assets/images/car2.png";
import car3 from "../../../assets/images/car3.png";
import car4 from "../../../assets/images/car4.png";

const CAR_TYPES = {
  ALL: "all",
  ECONOMY: "economy",
  PREMIUM: "premium",
};

const cars = [
  { id: 1, name: "ELANTRA", price: "12 000 - 25 000 ₽", image: car1 },
  { id: 2, name: "i30 N", price: "10 000 - 32 000 ₽", image: car2 },
  { id: 3, name: "CRETA", price: "12 000 - 25 000 ₽", image: car3 },
  { id: 4, name: "SONATA", price: "10 000 - 32 000 ₽", image: car4 },
];

const Model = () => {
  const [carType, setCarType] = useState(CAR_TYPES.ALL);
  const [selectedCarId, setSelectedCarId] = useState(null);

  const onCarTypeChange = (event) => {
    setCarType(event.target.value);
  };

  const onCarItemClick = (id) => {
    setSelectedCarId(id);
  };
  return (
    <div className="model">
      <div className="model__checkbox">
        <Radio
          name="Все модели"
          value={CAR_TYPES.ALL}
          onChange={onCarTypeChange}
          checked={carType === CAR_TYPES.ALL}
        />
        <Radio
          name="Эконом"
          value={CAR_TYPES.ECONOMY}
          onChange={onCarTypeChange}
          checked={carType === CAR_TYPES.ECONOMY}
        />
        <Radio
          name="Премиум"
          value={CAR_TYPES.PREMIUM}
          onChange={onCarTypeChange}
          checked={carType === CAR_TYPES.PREMIUM}
        />
      </div>
      <div className="model__car-list-wrapper">
        <div className="model__car-list">
          {cars.map((car) => (
            <CarItem
              key={car.id}
              item={car}
              selected={selectedCarId === car.id}
              onClick={onCarItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Model;
