import React from 'react';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Navigationbar.css';
import { Navbar, Nav, Image } from 'react-bootstrap';
import QuestionIcon from '../images/QuestionIcon.svg';
import HomeIcon from '../images/home.svg';
import {
  Link
} from "react-router-dom";


function Navigationbar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Nav className="container-fluid">
        <Navbar.Brand>
        <Link to="/">
          <img src={logo} alt="error" width="100" height="50" className="d-inline-block align-top" />
          </Link>
        AnonQ
      </Navbar.Brand>
        <Nav.Item className="ml-auto">
            <Link to="/">
            <Image src={HomeIcon}></Image >
            </Link>
            |
            <Link to="/AskQuestion">
            <Image src={QuestionIcon}></Image >
            </Link>

        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
export default Navigationbar;