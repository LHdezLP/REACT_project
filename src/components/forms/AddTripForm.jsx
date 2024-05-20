import React, { useState } from 'react';
import vehiclesService from "../../services/firebase/vehicles.service";

const AddTripForm = ({ closeModal }) => {
  const [driver, setDriver] = useState('');
  const [type, setType] = useState('');
  const [sits, setSits] = useState('');
  const [info, setInfo] = useState('');

  const handleAddTrip = () => {
    const vehicleData = {
      driver,
      type,
      sits: parseInt(sits),
      info
    };

    vehiclesService.addVehicle(vehicleData).then(() => {
      alert('Viaje añadido exitosamente!');
      closeModal();
    }).catch(error => {
      console.error("Error al añadir viaje: ", error);
    });
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    switch (e.target.value) {
      case 'car':
        setSits(4);
        break;
      case 'van':
        setSits(8);
        break;
      case 'bus':
        setSits(20);
        break;
      default:
        setSits('');
    }
  };

  return (
    <div>
      <h2>Añadir Viaje</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
          />
        </div>
        <div>
          <label>Tipo de vehículo:</label>
          <select value={type} onChange={handleTypeChange}>
            <option value="">Selecciona</option>
            <option value="car">Car</option>
            <option value="van">Van</option>
            <option value="bus">Bus</option>
          </select>
        </div>
        <div>
          <label>Plazas disponibles:</label>
          <input
            type="number"
            value={sits}
            onChange={(e) => setSits(e.target.value)}
            max={type === 'car' ? 4 : type === 'van' ? 8 : 20}
            readOnly={true}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddTrip}>Añadir</button>
      </form>
    </div>
  );
};

export default AddTripForm;
