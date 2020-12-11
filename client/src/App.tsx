import Axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import { User } from "./types";

const App: FC = () => {
  const [user, setUser] = useState<User | undefined>();
  const [visible, setVisible] = useState(false);

  const handleAuthUser = (data: User) => {
    setUser(data);
  };

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
      <Header
        user={user}
        setUser={setUser}
        setVisible={setVisible}
        visible={visible}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home user={user} setVisible={setVisible} visible={visible} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={() => <Signup handleAuthUser={handleAuthUser} />}
        />
        <Route
          exact
          path="/signin"
          render={() => <Signin handleAuthUser={handleAuthUser} />}
        />
      </Switch>
    </>
  );
};

export default App;
