import CartWidget from "../CartWidget/CartWidget";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../LogoStore/Logo";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          id="navStyle"
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <Logo />
              Cacto PetShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Logo />
                  Cacto PetShop
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink
                    to={`/category/Alimento para Perros`}
                    id="btn"
                    className={({ isActive }) =>
                      isActive ? "ActiveOption" : "Option"
                    }
                  >
                    Alimento para Perros
                  </NavLink>
                  <NavLink
                    to={`/category/Alimento para Gatos`}
                    id="btn"
                    className={({ isActive }) =>
                      isActive ? "ActiveOption" : "Option"
                    }
                  >
                    Alimento para Gatos
                  </NavLink>
                  <NavLink
                    to={`/category/Indumentaria y Accesorios`}
                    id="btn"
                    className={({ isActive }) =>
                      isActive ? "ActiveOption" : "Option"
                    }
                  >
                    Indumentaria y Accesorios
                  </NavLink>
                  <NavLink
                    to={`/category/Cuchas y Camitas`}
                    id="btn"
                    className={({ isActive }) =>
                      isActive ? "ActiveOption" : "Option"
                    }
                  >
                    Cuchas y Camitas
                  </NavLink>
                  <NavLink
                    to={`/category/Juguetes`}
                    id="btn"
                    className={({ isActive }) =>
                      isActive ? "ActiveOption" : "Option"
                    }
                  >
                    Juguetes
                  </NavLink>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="¿Que estas buscando?"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                  <CartWidget />
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
