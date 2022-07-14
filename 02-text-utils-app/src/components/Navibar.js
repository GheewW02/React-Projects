import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

import PropTypes from "prop-types";

function Navibar(props) {
  return (
    <Navbar bg={`${props.mode}`} variant={`${props.mode}`} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">TextUtils.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Dummy Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">Dummy Action</NavDropdown.Item>
              <NavDropdown.Item href="/">Another Dummy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Something else here</NavDropdown.Item>
            </NavDropdown>
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
