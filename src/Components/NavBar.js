import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Footer from "./Footer"

function NavBar() {
  return (
    <div>
      <div className="navigation">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/images/mirror-logo.png"
                width="20%"
                height="20%"
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
                  <NavDropdown.Item href="/doctors/0">
                  Гулиева Севиль Теймуровна
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/doctors/1">
                  Кан Вероника Вадимовна
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/doctors/2">
                  Дадаш-заде Лейла Фикрат кызы
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/doctors/3">
                  Скуридина Дарья Викторовна
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/catalog">РЕЗУЛЬТАТЫ</Nav.Link>
                <Nav.Link href="/catalog">ОТЗЫВЫ</Nav.Link>
                 <Nav.Link href="/catalog">ПРАЙСЛИСТ</Nav.Link>
                <Nav.Link href="/">КОНТАКТЫ </Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default NavBar;
