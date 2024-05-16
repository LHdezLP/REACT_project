import { useState, useEffect } from "react";
import vehiclesService from "../../services/firebase/vehicles.service";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import sectionImage from '../../img/Camping-2-Poule-2019.jpg';
import campingImage from '../../img/camp-here.png';
import sharetravelImage from '../../img/share-travel.png';
import frontImage from '../../img/girl-camping-at-festival.jpg';
import './Camping.css';

function Camping() {
  const [vehicles, setVehicles] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    getAllVehicles();
  }, []);

  const getAllVehicles = () => {
    vehiclesService.getAllVehicles().then((snapshot) => {
      let auxVehicles = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();

        auxVehicles.push({
          key: key,
          driver: data.driver,
          type: data.type,
          info: data.info,
          sits: data.sits
        });
      });
      setVehicles([...auxVehicles]);
    });
  };

  const handleFilterChange = (filter) => {
    setFilterBy(filter);
    setShowFilters(false);
  };

  const clearFilter = () => {
    setFilterBy('');
    setShowFilters(false);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#viajes-section') {
      const section = document.getElementById('viajes-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="section-container">
          <img src={sectionImage} alt="front-image" className="front-img" />
        </div>

        <div className="section-container">
          <div className='message-container'>
            <img src={campingImage} alt="camping-image" className="front-img" />
          </div>
        </div>

        <div className="section-container">
        </div>

        <div className="section-container">
          <img src={frontImage} alt="front-image" className="front-img" />
        </div>

        <div className="section-container" id="viajes-section">
          <div className='message-container'>
            <img src={sharetravelImage} alt="share-travel-image" className="front-img" />
          </div>
        </div>

        <div className="section-container">
          <div className="travel-selection-panel">
            <ul className="travel-list-group">
              <li className="travel-list-group-item">
                <div className="travel-panel-heading">
                  <i className="fa fa-fw fa-shopping-cart"></i> VIAJES DISPONIBLES
                  <div className="filter-dropdown">
                    <button className="filter-btn" onClick={() => setShowFilters(!showFilters)}>
                      Filtro
                    </button>
                    <div className={`dropdown-content ${showFilters ? "show" : ""}`}>
                      <div className="filter-option" onClick={() => handleFilterChange('Car')}>
                        Car
                      </div>
                      <div className="filter-option" onClick={() => handleFilterChange('Van')}>
                        Van
                      </div>
                      <div className="filter-option" onClick={() => handleFilterChange('Bus')}>
                        Bus
                      </div>
                      <div className="filter-option" onClick={clearFilter}>
                        Clear
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              
              {vehicles.map(vehicle => (
                <li key={vehicle.key} className={"travel-list-item" + (filterBy && !vehicle.type.includes(filterBy) ? ' hidden' : '')}>
                  <div className="travel-row">
                    <div className="row entrada">
                      <div className="col-driver">
                        <i className="fa fa-user"></i>
                        <div className="et-travel-nombre">
                          <span className="et-travel-driver badge badge-primary">
                            {`${vehicle.driver} va a visitarnos, apúntate!`}
                          </span>
                        </div>
                        <p className="et-vehicle-type">
                          Tipo de Vehículo: {vehicle.type}
                        </p>
                      </div>
                      <div className="col-sits-left">
                        <div className="et-sits-left badge badge-info">
                          Plazas vacantes: {vehicle.sits}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row reserve-sit">
                    {Array(vehicle.sits).fill(null).map((_, index) => (
                      <div key={index} className="col reserve-sit-item">
                        <div className="et-reserve-sit badge badge-success">Plaza Libre</div>
                      </div>
                    ))}
                  </div>
                  <div className="row driver-info">
                    <div className="col">
                      Driver Info: {vehicle.info}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Camping;
