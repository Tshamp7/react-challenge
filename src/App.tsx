import React, { useState, Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [name, setName] = useState("");

  return (
    <Switch>
      <Route exact path="/" component={Home} getName={setName} name={name} />
      {name && <Route path="/education" component={education} name={name} />}
    </Switch>
  );
}

export default App;
