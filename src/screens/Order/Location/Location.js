import React from "react";
import { SelectField } from "../../../components/SelectField";
import "./Location.scss";
import MapImage from "../../../assets/images/Map.png";

const options = [
  { value: "ульяновск", label: "Ульяновск" },
  { value: "тольятти", label: "Тольятти" },
  { value: "самара", label: "Самара" },
  { value: "казань", label: "Казань" },
];

const Location = () => {
  return (
    <div className="location">
      <div className="location__select-fields">
        <SelectField
          name="Город"
          options={options}
          placeholder="Начните вводить город"
        />
        <SelectField
          name="Пункт выдачи"
          placeholder="Начните вводить пункт выдачи"
        />
      </div>
      <div className="location__map">
        <p>Выбрать на карте:</p>
        <div className="location__map-images">
          <img src={MapImage} alt="Not found" />
        </div>
      </div>
    </div>
  );
};
export default Location;
