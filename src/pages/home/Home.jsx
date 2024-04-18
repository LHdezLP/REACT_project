import React, { useState } from 'react';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import frontImage from '../../img/main-stage.jpg';
import lastImage from '../../img/main-stage-2.jpg';
import festImage from '../../img/Rodentpocalypse-removebg-preview.png';
import { images } from '../../models/carrousel/carrousel.js';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="section-container">
        <div className="overlay-image">
          <img src={festImage} alt="fest-image" className="centered-image" />
        </div>
        <img
          src={frontImage}
          alt="front-image"
          className="front-img"
        />
      </div>
      <div className="section-container">
        <div
          className="img-carrousel"
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        >
          <div className="carrousel-box">

            <div className="image-container">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].description}
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
              />
              {showDescription && (
                <div className="description-overlay">
                  <p>{images[currentIndex].description}</p>
                </div>
              )}
            </div>
            <div className="button-container">
              <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrevImage} />
              <FontAwesomeIcon icon={faArrowRight} onClick={handleNextImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <img
          src={lastImage}
          alt="front-image"
          className="front-img"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
