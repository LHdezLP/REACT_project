import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import logoImage from '../../img/Logo-header.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-box">
        <img src={logoImage} alt="footer-logo" className="footer-logo" />
      </div>
      <div className="container-box">
        <ul className="social">
          <li><a href="mailto:luishernandezrodriguez@alumno.ieselrinco.es"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li className="footer-separator">|</li>
          <li><Link to="/tickets"><FontAwesomeIcon icon={faYoutube} /></Link></li>
          <li className="footer-separator">|</li>
          <li><Link to="https://github.com/LHdezLP"><FontAwesomeIcon icon={faGithub} /></Link></li>
        </ul>
      </div>
      <div className="container-box">
        <ul className="links">
          <li><a href="mailto:luishernandezrodriguez@alumno.ieselrinco.es">Contact</a></li>
          <li className="footer-separator">|</li>
          <li><Link to="/tickets">Tienda</Link></li>
          <li className="footer-separator">|</li>
          <li><Link to="/cartel">Info</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
