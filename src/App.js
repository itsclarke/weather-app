import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Forecast from "./components/Forecast";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="weather-app">
        <Switch>
          <Route exact path="/" component={Forecast} />
          <Route path="/:zip/:day" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
