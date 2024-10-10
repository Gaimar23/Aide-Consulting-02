import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/Logo2.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="first">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
          <ul className="links">
            <li>Accueil</li>
            <li>A Propos</li>
            <li>Offres</li>
            <li>Processus</li>
            <li>Avis</li>
            <button>Démarer</button>
          </ul>
          <div className="mobile-menu-icon">
            <FiMenu className="menu-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
