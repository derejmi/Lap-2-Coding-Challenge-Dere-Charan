import React from "react";
import Form from "./components/Form";

import { Switch, Route } from "react-router-dom";
import Navbarr from "./components/Navbarr";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navbarr />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div id="welcome">
                  <h2> Welcome </h2>
                  <p>Hi, Welcome to our site.</p>
                  <p>On the search bar at the top, you can </p>
                </div>
              );
            }}
          />
          <Route path="/repos" component={Form} />
          <Route
            path="/about"
            render={() => {
              return (
                <div id="about">
                  <h2> About us </h2>
                  <p>
                    Welcome to github 2.0 ,where you can search, discover and
                    ......dhashd
                  </p>
                </div>
              );
            }}
          />
          <Route
            render={() => {
              return (
                <div id="NotFound">
                  <h1>404 Error - Not Found!</h1>
                </div>
              );
            }}
          />
        </Switch>
      </>
    );
  }
}

export default App;
