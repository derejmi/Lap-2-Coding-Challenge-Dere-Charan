import React from "react";
import "./greeting.css";

const Greeting = (props) => {
  const name = props.details.owner.login;
  return <h1 className="Greeting">Hello {name}! </h1>;
};

export default Greeting;
