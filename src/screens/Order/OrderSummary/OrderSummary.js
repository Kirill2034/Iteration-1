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
          <OrderRowInfo title="Пункт выдачи" name="Тольятти, Громовой 16" />
          {location.pathname === Routes.ORDER_MODEL && (
            <OrderRowInfo title="Модель" name="ELENTRA" />
          )}
          {location.pathname === Routes.ORDER_ADDITIONALLY && (
            <>
              <OrderRowInfo title="Модель" name="ELENTRA" />
              <OrderRowInfo title="Цвет" name="Любой" />
              <OrderRowInfo title="Длительность аренды" name="1Д 2Ч" />
              <OrderRowInfo title="Тариф" name="На сутки" />
              <OrderRowInfo title="Полный бак" name="Да" />
            </>
          )}
          <div className="order-summary__summary">
            <p>Цена: </p>
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
        {location.pathname === Routes.ORDER_ADDITIONALLY && (
          <Button text="Итого" />
        )}
      </div>
    </div>
  );
};
export default OrderSummary;
