import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { PublicRoutes } from "../../models/routes";
import { Link } from "react-router-dom";
import { resetMonth } from "../../api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InfoModal from "../Forms/InfoModal";

function NavBar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClickButton = () => {
    resetMonth();
    navigate(`/${PublicRoutes.HOME}`);
  };

  const handleClickGenerateButton = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link
            style={{ textDecoration: "none" }}
            replace
            to={PublicRoutes.HOME}>
            <Navbar.Brand>Parqueadero</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Dar de Alta Vehiculo"
                id="collasible-nav-dropdown">
                <Link
                  className="dropdown-item"
                  replace
                  to={PublicRoutes.OFICIAL}>
                  Oficial
                </Link>
                <Link
                  className="dropdown-item"
                  replace
                  to={PublicRoutes.RESIDENT}>
                  Residente
                </Link>
              </NavDropdown>
              <Link
                className="navbar-expand-lg navbar-nav nav-link"
                replace
                to={PublicRoutes.REGISTERENTRY}>
                Registrar Entrada
              </Link>
            </Nav>
            <Nav>
              <Link
                className="navbar-expand-lg navbar-nav nav-link"
                replace
                to={PublicRoutes.CREATECAR}>
                Crear Carro
              </Link>
              <Button variant="outline-light" onClick={handleClickButton}>
                Comienzo mes
              </Button>
              <Button
                variant="outline-light"
                onClick={handleClickGenerateButton}>
                Generar Informe Residentes
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <InfoModal show={showModal} onHide={handleCloseModal} />
    </>
  );
}
export default NavBar;
