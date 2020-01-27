import React from "react";
import { Route, Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "../component/container/Login";
import Dashboard from "../component/container/Dashboard";
import Transaction from "../component/container/Transaction";
import Account from "../component/container/Account";
import NotFound from "../component/layout/NotFound";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/transactions" component={Transaction} />
      <PrivateRoute path="/accounts" component={Account} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoute;
