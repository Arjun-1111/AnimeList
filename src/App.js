import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SingleList from "./pages/SingleList";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/single_list/:id">
            <SingleList />
          </Route>

          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
