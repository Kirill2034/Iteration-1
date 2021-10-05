import React from "react";
import "./Radio.scss";
import cn from "classnames";

const Radio = (props) => (
  <div className={cn("radio", { checked: props.checked })}>
    <label>
      <div className="radio__custom-radio"></div>
      <input type="radio" className="radio__radio" {...props} />
      {props.name}
    </label>
  </div>
);
export default Radio;
