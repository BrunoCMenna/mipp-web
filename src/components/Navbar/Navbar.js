import React from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <img src="img/Original.png" className="img-fluid navbar-logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="#">
                Nosotros
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Clientes
              </a>
            </li>
            <li className="nav-item mx-1">
              <a className="nav-link" href="#">
                Historia
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
