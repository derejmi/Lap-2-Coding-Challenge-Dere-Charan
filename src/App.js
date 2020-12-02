import React from "react";
import Form from "./components/Form";
import Navbarr from "./components/Navbarr";
import "bootstrap/dist/css/bootstrap.css";
import About from "./pages/About";


class App extends React.Component {
  state = {};

  render() {
    return (
     
      <div>
        {/* <Form /> */}
        <Navbarr/>
      </div>
    );
  }
}

export default App;
