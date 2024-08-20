import { Badge, Navbar, Nav, Container } from "react-bootstrap";;
import styles from './header.module.css';
import Bascket from "@components/eCom/Bascket/Bascket";

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
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Categories</Nav.Link>
              <Nav.Link>About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>
  );
};

export default Header;
