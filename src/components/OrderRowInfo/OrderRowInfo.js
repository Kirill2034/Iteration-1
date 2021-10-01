import React from "react";
import "./OrderRowInfo.scss";

const OrderRowInfo = ({ name }) => (
  <div className="order-row-info">
    <p>Пункт выдачи</p>

    <div className="order-row-info__separator"></div>

    <p>{name}</p>
  </div>
);
export default OrderRowInfo;
