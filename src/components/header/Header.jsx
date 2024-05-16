import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../img/skull-logo.png';
import abonoImage from '../../img/logo-abonos.png';
import campingImage from '../../img/camping-logo.png';
import travelImage from '../../img/icono-viajes.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date("May 9, 2024");
    const differenceInTime = targetDate.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    setDaysLeft(differenceInDays);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='header-container'>
        <div className="nav-bar-top">
          <div className="nav-bar-top-container">
            <div className="days-left">
              {daysLeft > 0 ? `Rodentpocalypse begins in ${daysLeft} days!!` : "The Rodentpocalypse is here!"}
            </div>
            <Link to="/tickets"><span className="quick-info-tab">Tickets: On Sale!</span></Link>
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
                <Link to="/camping">
                  <div className="logo-item">
                    <img src={campingImage} alt="camping-tab" className="item-img" />
                  </div>
                </Link>
              </li>
              <li className="menu-items">
                <Link to="/camping#viajes-section">
                  <div className="logo-item">
                    <img src={travelImage} alt="travel-tab" className="item-img" />
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
