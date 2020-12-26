import React, { Component } from "react";
// import Welcome from './Welcome';
import "./welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div id="Welcome">
        <header class="jumbotron">
          <h2> Github 2.0 ❤️️ </h2>
        </header>
        <p>Hi ❤️️</p>
        <p>Welcome to github 2.0, please search your github username above </p>
        <p>
          You will then be able to retrieve all your repositries and any data
          associated with those repos{" "}
        </p>
      </div>
    );
  }
}
export default Welcome;
