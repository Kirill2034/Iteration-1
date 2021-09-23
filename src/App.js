import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./screens/Home";
import { Routes } from "./common/Routes";
import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path={Routes.HOME}>
          <Home />
        </Route>
        <Redirect to={Routes.HOME} />
      </Switch>
    </div>
  );
}

export default App;
