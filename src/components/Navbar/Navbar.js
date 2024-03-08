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

  var prevScrollpos = window.scrollY;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
      setMenuOpen(false);
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <header className="header" id="navbar">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <div className="icons">
        {menuOpen ? (
          <button className="close-menu-icon" onClick={toggleMenu}>
            <IoCloseOutline />
          </button>
        ) : (
          <button className="open-menu-icon" onClick={toggleMenu}>
            <IoIosMenu />
          </button>
        )}
      </div>
      <nav className={`p-0 navbar ${menuOpen && "navbar_active"}`}>
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
