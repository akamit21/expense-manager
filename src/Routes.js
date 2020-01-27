import React from "react";
import { Route, Switch } from "react-router-dom";

import Transaction from "./component/container/Transaction";
import Account from "./component/container/Account";

const Routes = () => {
  return (
    <Switch>
      <Route path="/transactions" component={Transaction} />
      <Route path="/accounts" component={Account} />
    </Switch>
  );
};

export default Routes;
