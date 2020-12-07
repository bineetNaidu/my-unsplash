import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

const App: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
