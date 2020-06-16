import React from "react";
import "./App.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Navigation />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;