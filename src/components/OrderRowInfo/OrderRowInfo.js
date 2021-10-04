import React from "react";
import "./OrderRowInfo.scss";

const OrderRowInfo = ({ title, name }) => (
  <div className="order-row-info">
    <p>{title}</p>

    <div className="order-row-info__separator"></div>

    <p>{name}</p>
  </div>
);
export default OrderRowInfo;
