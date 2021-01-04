import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { selectedReducer } from "./redux/reducers";
import { createStore } from "redux";

function App() {
  const store = createStore(selectedReducer);
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
