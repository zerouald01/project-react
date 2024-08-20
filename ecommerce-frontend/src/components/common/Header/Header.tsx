import { Badge, Navbar, Nav, Container } from "react-bootstrap";;
import styles from './header.module.css';
import { Bascket } from "@components/eCom";
import { NavLink } from "react-router-dom";

const { headerContainer, headerLogo, navBar } = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>Zer</span><Badge bg="danger">eComApp</Badge>
        </h1>
        <Bascket />
      </div>
      <Navbar expand="lg" className={navBar}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about-us">About</Nav.Link>
              <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>
  );
};

export default Header;
