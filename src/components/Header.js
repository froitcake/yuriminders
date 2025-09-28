import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="ureminders logo"
              className="logo-image"
            />
            <h1>yuriminders</h1>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#demo" className="nav-link">
              Harvard x MIT fanart
            </a>
            <a href="#features" className="nav-link">
              Other Ships
            </a>
            <a href="#features" className="nav-link">
              GitHub
            </a>
          </nav>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? "hamburger-open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
