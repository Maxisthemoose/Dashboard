import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { HomePage, MenuPage, Dashboard } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/menu" exact={true} component={MenuPage} />
      <Route path="/dashboard" exact={true} component={Dashboard} />
      <Route path="/dashboard/:id" exact={true} component={Dashboard} />
    </Switch>
  );
}

export default App;
