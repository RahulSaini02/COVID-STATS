import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import Tracker from "./Tracker.js";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="" />
            <h2>COVID - 19</h2>
          </div>
          <div className="nav__links">
            <Redirect to="/"></Redirect>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/tracker">STATS</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="app__body">
          <Switch>
            <Route path="/tracker">
              <Tracker />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
