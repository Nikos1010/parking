import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PublicRoutes } from "../../models/routes";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link style={{ textDecoration: "none" }} replace to={PublicRoutes.HOME}>
          <Navbar.Brand>Parqueadero</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Dar de Alta Vehiculo"
              id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  replace
                  to={PublicRoutes.OFICIAL}>
                  Oficial
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  replace
                  to={PublicRoutes.RESIDENT}>
                  Residente
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link
              className="navbar-expand-lg navbar-nav nav-link"
              replace
              to={PublicRoutes.CREATECAR}>
              Crear Carro
            </Link>
            <Link
              className="navbar-expand-lg navbar-nav nav-link"
              replace
              to={PublicRoutes.CREATECAR}>
              Comienzo mes
            </Link>
            <Link className="nav-link" replace to={PublicRoutes.CREATECAR}>
              Generar Informe Residentes
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
