import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import SearchBar from "./components/SearchBar/SearchBar";
import Alert from "./components/Alert/Alert";
import { Switch, Route } from "react-router-dom";
import User from "./components/Users/User";
import About from "./components/About/About";

import GitHubState from "../src/context/GitHub/GitHubState";
import AlertState from "../src/context/Alert/AlertState";
import Error404 from "./components/Error404/Error404";

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <Fragment>
          <Navbar />
          <Alert />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <SearchBar />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:login" component={User} />
            <Route render={() => <Error404 />} />
          </Switch>
        </Fragment>
      </AlertState>
    </GitHubState>
  );
};

export default App;
