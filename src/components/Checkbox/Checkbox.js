import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ name }) => (
  <div className="checkbox">
    <label>
      {name}
      <input type="radio" />
    </label>
  </div>
);
export default Checkbox;
