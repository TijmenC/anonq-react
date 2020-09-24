import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/logo.png';


function Navigationbar() {
    return (
    <Navbar bg="white" variant="white">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="150"
        height="75"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
    );
}
export default Navigationbar;