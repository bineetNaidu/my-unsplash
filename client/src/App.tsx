import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default App;
