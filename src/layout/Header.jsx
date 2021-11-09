import React from "react";

import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Job Search App</Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary" >Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
