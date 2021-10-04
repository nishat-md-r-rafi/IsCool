import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import React from "react";

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
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/serve">Service</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
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
