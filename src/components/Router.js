import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BeerList} />
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
