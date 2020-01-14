import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Counter from "./couter";

function App() {
  return (
    <Switch>
      <Route path="/" component={Counter} />
    </Switch>
  );
}

export default withRouter(App);


