import React from "react";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Chat } from "./containers/Chat/Chat";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/chat/:userId">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
