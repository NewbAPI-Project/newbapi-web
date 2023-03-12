import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function AppNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NewbAPI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Explore</Nav.Link>
            <Nav.Link href="#link">Fake API</Nav.Link>
            <Nav.Link href="#link">API Status</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}