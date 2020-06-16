import React from "react";
import "./App.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Login from "./pages/Login/index";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Navigation />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
