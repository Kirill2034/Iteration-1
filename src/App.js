import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./screens/Home";
import { Order } from "./screens/Order";
import { Routes } from "./common/Routes";
import { Menu } from "./components/Menu";

const App = () => (
  <div className="app">
    <Menu />
    <Switch>
      <Route exact path={Routes.HOME}>
        <Home />
      </Route>
      <Route path={Routes.ORDER}>
        <Order />
      </Route>
      <Redirect to={Routes.HOME} />
    </Switch>
  </div>
);

export default App;
