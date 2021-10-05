import React from "react";
import "./Order.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "../../common/Routes";
import { Location } from "./Location";
import { Model } from "./Model";
import { OrderSummary } from "./OrderSummary";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "../../components/Header";

const crumbs = [
  { text: "Местоположение", link: Routes.ORDER_LOCATION },
  { text: "Модель", link: Routes.ORDER_MODEL },
  { text: "Дополнительно", link: Routes.ORDER_ADDITIONALLY },
  { text: "Итого", link: Routes.ORDER_TOTAL },
];

const Order = () => (
  <div className="order">
    <div className="order__header">
      <div className="order__header-wrapper">
        <Header />
      </div>
      <div className="order__header-breadcrumbs">
        <Breadcrumbs crumbs={crumbs} />
      </div>
    </div>
    <div className="order__content">
      <div className="order__content-main">
        <Switch>
          <Route path={Routes.ORDER_LOCATION}>
            <Location />
          </Route>
          <Route path={Routes.ORDER_MODEL}>
            <Model />
          </Route>

          <Redirect to={Routes.ORDER_LOCATION} />
        </Switch>
      </div>
      <div className="order__content-summary">
        <OrderSummary />
      </div>
    </div>
  </div>
);

export default Order;
