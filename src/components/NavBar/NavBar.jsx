import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PublicRoutes } from "../../models/routes";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={PublicRoutes.HOME}>Parqueadero</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Dar de Alta Vehiculo"
              id="collasible-nav-dropdown">
              <NavDropdown.Item href={PublicRoutes.OFICIAL}>
                Oficial
              </NavDropdown.Item>
              <NavDropdown.Item href={PublicRoutes.RESIDENT}>
                Residente
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href={PublicRoutes.CREATECAR}>Crear Carro</Nav.Link>
            <Nav.Link href={PublicRoutes.CREATECAR}>Comienzo mes</Nav.Link>
            <Nav.Link href={PublicRoutes.CREATECAR}>
              Generar Informe Residentes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
