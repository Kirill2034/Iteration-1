import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./screens/Home";
import { Routes } from "./common/Routes";

function App() {
  return (
    <Switch>
      <Route path={Routes.HOME}>
        <Home />
      </Route>

      <Redirect to={Routes.HOME} />
    </Switch>
  );
}

export default App;
