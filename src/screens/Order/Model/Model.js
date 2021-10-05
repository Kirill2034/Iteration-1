import React from "react";
import "./Model.scss";
import { Checkbox } from "../../../components/Checkbox";

const Model = () => (
  <div className="model">
    <div className="model__checkbox">
      <Checkbox name="Все модели" />
      <Checkbox name="Эконом" />
      <Checkbox name="Премиум" />
    </div>
  </div>
);
export default Model;
