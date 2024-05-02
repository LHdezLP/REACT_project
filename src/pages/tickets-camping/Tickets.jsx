import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import frontImage from '../../img/main-stage-cropped.jpg';
import sectionImage from '../../img/knotfest-1161.jpg';
import './Tickets.css';
import ticketsService from "../../services/firebase/tickets.service";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    getAllTickets();
  }, []);

  const getAllTickets = () => {
    ticketsService.getAllTickets().then((items) => {
      let auxTickets = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();

        auxTickets.push({
          key: key,
          type: data.type,
          price: data.price,
          description: data.description
        });
      });
      setTickets([...auxTickets]);
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

  return (
    <div className="wrapper">
      <Header />
      <div className="section-container">
        <img src={frontImage} alt="front-image" className="front-img" />
      </div>

      <div className="section-container">
        <div className='panel-container'>
          <div className="ticket-container">
            <div className="ticket-selection-panel">
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="panel-heading">
                    <i className="fa fa-fw fa-shopping-cart"></i> Entradas
                    <div className="filter-dropdown">
                      <button className="filter-btn" onClick={() => setShowFilters(!showFilters)}>
                        Filtro
                      </button>
                      <div className={`dropdown-content ${showFilters ? "show" : ""}`}>
                        <div className="filter-option" onClick={() => handleFilterChange('Standard')}>
                          Standard
                        </div>
                        <div className="filter-option" onClick={() => handleFilterChange('Premium')}>
                          Premium
                        </div>
                        <div className="filter-option" onClick={clearFilter}>
                          Clear
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {tickets.map(ticket => (
                  <li key={ticket.key} className={"list-item" + (filterBy && !ticket.type.includes(filterBy) ? ' hidden' : '')}>
                    <div className="ticket-row">
                      <div className="row entrada">
                        <div className="col-ticket-type">
                          <i className="fa fa-ticket-alt"></i>
                          <div className="et-entrada-nombre">
                            
                            <span className="et-entrada-precio badge badge-primary">
                              {ticket.type}
                            </span>
                          </div>
                          <p className="et-entrada-descripcion">
                            {ticket.description}
                          </p>
                        </div>
                        <div className="col-ticket-price text-right">
                          <div className="alert alert-danger">
                            <strong>{ticket.price}&nbsp;€</strong>
                          </div>
                          <div className="et-entrada-cantidad"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <img src={sectionImage} alt="front-image" className="front-img" />
      </div>
      <Footer />
    </div>
  );
}

export default Tickets;
