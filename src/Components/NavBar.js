import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <div>
      <div className="navigation">
        <Navbar expand="sm">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src="/images/mirror-logo.png"
                width="30%"
                height="30%"
                alt="MIRRORLogo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">ГЛАВНАЯ</Nav.Link>
                <Nav.Link href="/">О НАС</Nav.Link>
                <Nav.Link href="/catalog">ПРОЦЕДУРЫ</Nav.Link>
                <NavDropdown title="НАШИ СПЕЦИАЛИСТЫ" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/doctors/1">
                    Sevil 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/doctors/2">
                  Sevil 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/doctors/3">
                  Sevil 3
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/doctors/4">
                  Sevil 4
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">ОБЗОРЫ</Nav.Link>
                <Nav.Link href="/catalog">РЕЗУЛЬТАТЫ</Nav.Link>
                <Nav.Link href="/">КОНТАКТЫ </Nav.Link>
                <Nav.Link href="/catalog">ПРАЙСЛИСТ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
