import React from "react";
import "./OrderSummary.scss";
import { Button } from "../../../components/Button";
import { useLocation } from "react-router";
import { Routes } from "../../../common/Routes";
import { OrderRowInfo } from "../../../components/OrderRowInfo";

const OrderSummary = () => {
  const location = useLocation();
  return (
    <div className="order-summary">
      <div className="wrapper">
        <div className="order-summary__order">Ваш заказ:</div>
        <div className="order-summary__order-wrapper">
          <OrderRowInfo name="Тольятти, Громовой 16" />
          <div className="order-summary__summary">
            <p>Цена: &nbsp;</p>
            <p> от 8 000 до 12 000 ₽</p>
          </div>
        </div>
      </div>

      <div className="order-summary-btn">
        {location.pathname === Routes.ORDER_LOCATION && (
          <Button text="Выбрать модель" />
        )}
        {location.pathname === Routes.ORDER_MODEL && (
          <Button text="Дополнительно" />
        )}
      </div>
    </div>
  );
};
export default OrderSummary;
