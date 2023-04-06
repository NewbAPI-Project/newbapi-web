/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function AppNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Link href={'/'} passHref legacyBehavior>
        <Navbar.Brand>
          <img
              src="/assets/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="NewbAPI Logo"
            />
        </Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={'https://rapidapi.com/user/newbAPIOfficial'} target="_blank" passHref legacyBehavior>
              <Nav.Link>Explore</Nav.Link>
            </Link>
            <Link href={'/fake-api'} passHref legacyBehavior>
              <Nav.Link>Fake API</Nav.Link>
            </Link>
            <Link href={'https://status.newbapi.com/status/system'} passHref legacyBehavior>
              <Nav.Link>🟢 API Status</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}