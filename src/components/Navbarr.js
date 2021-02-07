import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Navbarr = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Welcome ❤️️ </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{ marginTop: 7.5, marginRight: 15 }}>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem style={{ marginTop: 7.5, marginRight: 15 }}>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem style={{ marginTop: 7.5, marginRight: 15 }}>
              <Link to="/repos">Repos</Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>github repo</DropdownItem>
                <DropdownItem>github</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Github Repo App</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
