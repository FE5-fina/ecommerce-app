import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "../style/Header.css";

import logoTokped from "../img/tokpedlogo.svg";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoTokped} className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
        <Button className="color-">Sign in</Button>
        <Button>Login</Button>
      </Container>
    </Navbar>
  );
}

export default Header;
