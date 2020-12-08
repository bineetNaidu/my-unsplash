import React, { FC, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import { User } from "./types";

const App: FC = () => {
  const [user, setUser] = useState<User | {}>({});
  useEffect(() => {
    (async () => {
      const authUser = await Axios.get("/api/users/currentuser");
      setUser(authUser.data.currentUser.user);
    })();
  }, [setUser]);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
};

export default App;
