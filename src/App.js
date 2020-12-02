import React from "react";
import Form from "./components/Form";
import Welcome from './pages/Welcome'
import About from './pages/About'

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
        <Route exact path="/" component={Welcome} />
        
        <Route path="/repos" component={Form} />
        <Route path="/about" component={About} />
         
        
            
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
