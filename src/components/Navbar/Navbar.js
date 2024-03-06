import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

import "../Navbar/Navbar.css";
import logo from "../../img/logo.png";

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (element) => {
    setMenuOpen(!menuOpen);
  };

  const scrollToElement = (element) => {
    const offsetTop = document.querySelector(element).offsetTop;
    const finalScrollPosition = offsetTop - 90;
    window.scrollTo({
      top: finalScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <div className="icons">
        {menuOpen ? (
          <button className="open-menu-icon" onClick={toggleMenu}>
            <IoCloseOutline />
          </button>
        ) : (
          <button className="close-menu-icon" onClick={toggleMenu}>
            <IoIosMenu />
          </button>
        )}
      </div>
      <nav className={`navbar ${menuOpen && "navbar_active"}`}>
        <a href="#top" onClick={toggleMenu}>
          Inicio
        </a>
        <a href="#nosotros" onClick={() => toggleMenu()}>
          Nosotros
        </a>
        <a href="#servicios" onClick={toggleMenu}>
          Servicios
        </a>
        <a href="#clientes" onClick={toggleMenu}>
          Clientes
        </a>
        <a href="#historia" onClick={toggleMenu}>
          Historia
        </a>
        <a href="#contacto" onClick={toggleMenu}>
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default CustomNavbar;
