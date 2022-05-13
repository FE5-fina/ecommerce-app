import React from "react";
import { Navbar, Container, Button, InputGroup, FormControl } from "react-bootstrap";
import "../style/Header.css";

import logo from "../img/logo.png";

function Header() {
  return (
    <Navbar className="color-bg" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className="d-inline-block align-top size-logo" src={logo} alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <InputGroup size="sm" className="mb-2 box-style">
          <FormControl placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
        </InputGroup>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Button className="mx-2">Signup</Button>
        <Button className="mx-2">Login</Button>
      </Container>
    </Navbar>
  );
}

export default Header;
