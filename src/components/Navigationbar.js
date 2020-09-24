import React from 'react';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Navigationbar.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Navigationbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="container-fluid">
        <Navbar.Brand href="#home">
          <img src={logo} width="100" height="50" className="d-inline-block align-top" />
        AnonQ
      </Navbar.Brand>
        <Nav.Item className="ml-auto">
          <Router>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/">About</NavLink>
          </Router>
          {/* <Button variant="dark">Ask A Question</Button> */}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
export default Navigationbar;