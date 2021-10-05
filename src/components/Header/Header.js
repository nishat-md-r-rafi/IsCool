import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link, Switch } from "react-router-dom";
import React from "react";

const linkStyle = {
  textDecoration: "none",
  padding: "10px",
  backgroundColor: "lightblue",
  marginRight: "7px",
  borderRadius: "10px",
  onMouseOver: "backgroundC",
};

function Header(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">IsCool</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link style={linkStyle} to="/home">
                Home
              </Link>
              <Link style={linkStyle} to="/about">
                About
              </Link>
              <Link style={linkStyle} to="/serve">
                Service
              </Link>
              <Link style={linkStyle} to="/blogs">
                Blogs
              </Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Health</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Development</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Science</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Arts</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Finance and Banking
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Marketing</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Make Your Learning Easy With Us ...*...
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
