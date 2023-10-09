import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    // <div>
    //   <NavLink
    //     to="/"
    //     exact
    //     style={Link}
    //     activeStyle={{ background: "darkgreen" }}
    //   >
    //     Home
    //   </NavLink>
    //   <NavLink
    //     to="/home"
    //     exact
    //     style={Link}
    //     activeStyle={{ background: "darkgreen" }}
    //   >
    //     Home
    //   </NavLink>

    //   <NavLink
    //     to="/posts"
    //     exact
    //     style={Link}
    //     activeStyle={{ background: "darkgreen" }}
    //   >
    //     Home
    //   </NavLink>

    //   <NavLink
    //     to="/about"
    //     exact
    //     style={Link}
    //     activeStyle={{ background: "darkgreen" }}
    //   >
    //     Home
    //   </NavLink>
    // </div>
  );
};
export default NavBar;
