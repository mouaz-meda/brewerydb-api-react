import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import BeerDetail from "./BeerDetail";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route
        path="/beer/:beerId"
        render={request => {
          const beerId = request.match.params.beerId;
          return <BeerDetail id={beerId} />;
        }}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
