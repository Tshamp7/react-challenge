import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { createStore } from "redux";
import rootReducer from "../src/redux/index";

function App() {
  const store = createStore(rootReducer);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
