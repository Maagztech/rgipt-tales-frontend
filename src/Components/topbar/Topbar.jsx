import React from 'react'
import './Topbar.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function Topbar() {
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home" >
          <img
            alt=""
            src="https://source.unsplash.com/50x50/?logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{ borderRadius: "50%" }}
          />{' '}
          Rgipt Tales
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Catagories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Science</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Technology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bussiness</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Stock-Market</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Write</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#link">Privacy Policy</Nav.Link>


          </Nav>
        
        </Navbar.Collapse>
     
      </Container>

    </Navbar>
  );
}

export default Topbar;
