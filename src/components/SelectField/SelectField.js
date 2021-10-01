import React from "react";
import "./SelectField.scss";
import Select from "react-select";

const SelectField = ({ name, options, placeholder }) => (
  <div className="select-field">
    <p>{name}</p>
    <div className="select-field__select-wrapper">
      <Select options={options} isClearable={true} placeholder={placeholder} />
    </div>
  </div>
);

export default SelectField;
