import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import StickyFooter from 'react-sticky-footer';

import './navbar.css';
import './footer.css';

class App extends Component {

}

class NavBar extends Component {
  render() {
    return (
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home"><img src= "https://uploads-ssl.webflow.com/599a0f416dd4d50001b97b3d/5a47eeff115b2f000137f07a_BoardsMD-05.png"/></a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">
      Topics
    </NavItem>
    <NavItem eventKey={2} href="#">
      Practice
    </NavItem>
    <NavItem eventKey={3} href="#">
      Flashcards
    </NavItem>
    <NavItem eventKey={4} href="#">
      FAQs
    </NavItem>
    <NavItem eventKey={4} href="#">
      Log In
    </NavItem>
    <NavItem eventKey={5} href="#">
      Sign Up
    </NavItem>
  </Nav>
</Navbar>
    );
  }
}

export default NavBar;
