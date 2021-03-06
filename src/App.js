import Main from "./Components/Main/Main"
import Upsolve from "./Components/Upsolve/Upsolve"
import Pending from "./Components/Pending/Pending"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Recommended from "./Components/Recommended/Recommended";
import Analysis from "./Components/Analysis/Analysis";

const App = () => {
  return (
    <BrowserRouter>
      <Route render={({ location }) => (
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/upsolve" exact>
              <Upsolve />
            </Route>
            <Route path="/upsolve/pending" exact>
              <Pending />
            </Route>
            <Route path="/upsolve/recommended" exact>
              <Recommended />
            </Route>
            <Route path="/upsolve/analysis">
              <Analysis />
            </Route>
          </Switch>
        </AnimatePresence>
      )} />
    </BrowserRouter>
  );
}

export default App;
