import React from "react";
// in setupTests
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// NB: the react-16 enzyme adapter does work with 17 but we are anticipating an update soon
// For now if we do run into any issues, an unofficial adapter for 17 is available: https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17

configure({ adapter: new Adapter() });

import sinon from "sinon";

global.React = React;
global.shallow = shallow;
global.sinon = sinon; // optional, if using sinon library

