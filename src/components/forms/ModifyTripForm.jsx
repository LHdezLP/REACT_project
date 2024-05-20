// ModifyTripForm.js
import React, { useState } from 'react';
import vehiclesService from "../../services/firebase/vehicles.service";

const ModifyTripForm = ({ vehicle, closeModal }) => {
  const [driver, setDriver] = useState(vehicle.driver);
  const [type, setType] = useState(vehicle.type);
  const [sits, setSits] = useState(vehicle.sits.toString()); // Convertir a string para manejar correctamente el estado
  const [info, setInfo] = useState(vehicle.info);

  const handleModifyTrip = () => {
    const newData = {
      driver,
      type,
      sits: parseInt(sits), // Convertir nuevamente a entero antes de actualizar
      info
    };

    vehiclesService.updateVehicle(vehicle.key, newData).then(() => {
      alert("Viaje modificado exitosamente!");
      closeModal();
    }).catch(error => {
      console.error("Error al modificar viaje: ", error);
    });
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    // Lógica para establecer el número de plazas según el tipo de vehículo
    switch (e.target.value) {
      case 'car':
        setSits('4');
        break;
      case 'van':
        setSits('8');
        break;
      case 'bus':
        setSits('20');
        break;
      default:
        setSits('');
    }
  };

  return (
    <div>
      <h2>Modificar Viaje</h2>
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
        <button type="button" onClick={handleModifyTrip}>Modificar</button>
      </form>
    </div>
  );
};

export default ModifyTripForm;
