import Axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import { User } from "./types";

const App: FC = () => {
  const [user, setUser] = useState<User | undefined>();
  useEffect(() => {
    (async () => {
      const authUser = await Axios.get("/api/users/currentuser");
      if (authUser.data.currentUser) {
        setUser(authUser.data.currentUser.user);
      } else {
        setUser(undefined);
      }
    })();
  }, [setUser]);
  return (
    <>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
};

export default App;
