import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

import "../Navbar/Navbar.css";
import logo from "../../img/logo.png";
import { debounce } from "lodash";

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
      setPrevScrollpos(currentScrollPos);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <header className="header" id="navbar">
      <a href="/">
        <img src={logo} className="logo" alt="MIPP" />
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
          INICIO
        </a>
        <a href="#nosotros" onClick={() => toggleMenu()}>
          NOSOTROS
        </a>
        <a href="#servicios" onClick={toggleMenu}>
          SERVICIOS
        </a>
        <a href="#clientes" onClick={toggleMenu}>
          CLIENTES
        </a>
        <a href="#historia" onClick={toggleMenu}>
          HISTORIA
        </a>
        <a href="#contacto" onClick={toggleMenu}>
          CONTACTO
        </a>
      </nav>
    </header>
  );
};

export default CustomNavbar;
