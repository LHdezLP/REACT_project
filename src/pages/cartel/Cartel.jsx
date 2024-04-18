import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import sectionImage from '../../img/main-stage-cropped.jpg';
import frontImage from '../../img/main-stage.jpg';
import './Cartel.css';


function Cartel() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="section-container">
          <img src={sectionImage} alt="front-image" className="front-img" />
        </div>
        <div className="section-container">
          <div className='message-container'>
            <a><p>AQUI VA LA INFO DEL CARTEL</p></a>
            <a><p>UNDER CONSTRUCTION</p></a>
            <a><p>DISCULPE LAS MOLESTIAS</p></a>
          </div>
        </div>
        <div className="section-container">
          <img src={frontImage} alt="front-image" className="front-img" />
        </div>
        <Footer />
      </div>
    </>
  );
}


export default Cartel;