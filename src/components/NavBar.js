import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="md"
      fixed="top
    "
    >
      <Container>
        <Navbar.Brand id="navbarBrand">
          <Link to="/" id="router-link">
            Super Sonic Octopus
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} eventKey="0" to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} eventKey="1" to="/music">
              Music
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} eventKey="2" to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} eventKey="3" to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
