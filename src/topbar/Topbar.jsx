import React from 'react'
import { Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'

function Topbar() {
  return (
    <Navbar bg="dark" expand="md" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          
        </Nav>
        <Nav>

        </Nav>
        </Navbar.Collapse>
    </Container>

  </Navbar>
  );
}

export default Topbar;
