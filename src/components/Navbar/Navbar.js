import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../Navbar/Navbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => setExpanded(!expanded);

  const handleSelect = () => setExpanded(false); // Restablecer el estado del menú cuando se selecciona un elemento de la barra de navegación

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="white"
      expanded={expanded}
      onSelect={handleSelect}
      className="p-0"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="img/Original.png"
            className="img-fluid navbar-logo"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={handleNavCollapse} />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link className="navbar-link" href="#top">
              INICIO
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#nosotros">
              NOSOTROS
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#servicios">
              SERVICIOS
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#clientes">
              CLIENTES
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#historia">
              HISTORIA
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#contacto">
              CONTACTO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
