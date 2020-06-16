import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Login from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
