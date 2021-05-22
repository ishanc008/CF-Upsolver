import Navbar from "./Components/Navbar/Navbar"
import Main from "./Components/Main/Main"
import Upsolve from "./Components/Upsolve/Upsolve"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Route render={({ location }) => (
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Main} />
            <Route path="/upsolve" exact component={Upsolve} />
          </Switch>
        </AnimatePresence>
      )} />
    </BrowserRouter>
  );
}

export default App;
