import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../img/skull-logo.png';
import abonoImage from '../../img/logo-abonos.png';
import campingImage from '../../img/camping-logo.png';
import cartelImage from '../../img/cartel-logo.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='header-container'>
        <div className="nav-bar-top">
          <div className="nav-bar-top-container">
            <a className="quick-info-tab">Tickets: On Sale!</a>
          </div>
        </div>
        <div className="header">
          <div className="nav-bar-menu">
            <div className="navbar-logo-container">
              <Link to="/home">
                <img src={logoImage} alt="headbar-logo" className="logo-img" />
              </Link>
            </div>
            <button
              className="menu-toggle"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <span>&times;</span>
              ) : (
                <span>&#9776;</span>
              )}
            </button>
            <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <li className="menu-items">
                <Link to="/tickets">
                  <div className="logo-item">
                    <img src={abonoImage} alt="abono-tab" className="item-img" />
                  </div>
                </Link>
              </li>
              <li className="menu-items">
                <Link to="/tickets">
                  <div className="logo-item">
                    <img src={campingImage} alt="camping-tab" className="item-img" />
                  </div>
                </Link>
              </li>
              <li className="menu-items">
                <Link to="/cartel">
                  <div className="logo-item">
                    <img src={cartelImage} alt="bands-tab" className="item-img" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
