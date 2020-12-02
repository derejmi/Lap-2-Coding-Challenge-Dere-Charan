import React from "react";
import Form from "./components/Form";
import React from "react";
// import Form from "./Form";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/Navbarr";
import Navbarr from "./components/Navbarr";
import About from "./pages/About";


class App extends React.Component {
  state = {};

  render() {
    return (
     
      <div>
        <Navbarr/>
        {/* <Form /> */}
        
      </div>
    );
  }
}

export default App;
