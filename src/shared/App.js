import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Auth, Home } from "pages";
import BaseLayout from "components/base/BaseLayout";

function App() {
  const token = window.localStorage.getItem("token");

  return (
    <div style={{ background: "#f2f2f2" }}>
      <BaseLayout>
        <Switch>
          <Route exact path="/" render={() => (token ? <Home /> : <Auth />)} />
        </Switch>
      </BaseLayout>
    </div>
  );
}

export default App;
