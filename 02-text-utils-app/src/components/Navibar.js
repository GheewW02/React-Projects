import { Container, Form, Nav, Navbar } from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navibar(props) {
  return (
    <Navbar bg={`${props.mode}`} variant={`${props.mode}`} expand="lg">
      <Container fluid>
        <Navbar.Brand to="/">TextUtils.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", display: "flex", gap: "10px" }}
            navbarScroll
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </Nav>
          <Form.Check
            onClick={props.toggleMode}
            className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}
            type="switch"
            id="custom-switch"
            label={`Enable ${props.mode === "light" ? "dark" : "light"} mode`}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;

Navibar.prototype = { title: PropTypes.string };

Navibar.defaultProps = {
  t1: "okay",
};
