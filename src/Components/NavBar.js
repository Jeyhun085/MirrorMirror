import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Footer from "./Footer";
import treatmentsData from "../TreatmentsData";

const treatmentsName = [];
Object.keys(treatmentsData).forEach((key, index) => {
  treatmentsName.push(treatmentsData[key].name);
});

function NavBar() {
  return (
    <div>
      <div className="navigation">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src="/images/mirror-logo.png" width="20%" alt="MIRRORLogo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">ГЛАВНАЯ</Nav.Link>
                <NavDropdown title="ПРОЦЕДУРЫ" id="basic-nav-dropdown">
                  {treatmentsName.map((name, index) => {
                    return (
                      <NavDropdown.Item key={index} href={`/treatments/${index + 1}`}>
                        {name}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
                <NavDropdown title="НАШИ СПЕЦИАЛИСТЫ" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/doctors/1">
                    Гулиева Севиль Теймуровна
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/doctors/2">
                    Кан Вероника Вадимовна
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/doctors/3">
                    Дадаш-заде Лейла Фикрат кызы
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/doctors/4">
                    Скуридина Дарья Викторовна
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#results">РЕЗУЛЬТАТЫ</Nav.Link>
                <Nav.Link href="/reviews">ОТЗЫВЫ</Nav.Link>
                <Nav.Link href="/pricelist">ПРАЙСЛИСТ</Nav.Link>
                <Nav.Link href="#footer">КОНТАКТЫ </Nav.Link>
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
