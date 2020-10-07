import React from "react";
// import { Button } from "@chakra-ui/core";
import { Nav, NavDropdown, Form, FormControl, Navbar, Button } from "react-bootstrap";

export function HomePage(props: any) {
    const login = () => {
        console.log(process.env.BASE_URI)
        return window.location.href = `http://localhost:3001/api/login`
    };
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/info">Info</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button onClick={login} style={{ width: "auto" }}>Login</Button>
          </Navbar.Collapse>
        </Navbar>

    )
}