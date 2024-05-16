import { get, ref } from "firebase/database"
import db from "./firebase.config";

const refVehicles = ref(db, "/vehicles")

// Obtener todos los viajes
const getAllVehicles = () => {
    return get(refVehicles);
  };
  
  // Añadir un nuevo viajes
  const addVehicle = (vehicleData) => {
    const newVehicleRef = push(refVehicles);
    return set(newVehicleRef, vehicleData);
  };
  
  // Modificar un viaje existente
  const updateVehicle = (vehicleId, newData) => {
    const vehicleRef = ref(db, `/vehicles/${vehicleId}`);
    return update(vehicleRef, newData);
  };
  
  // Eliminar un viaje
  const deleteVehicle = (vehicleId) => {
    const vehicleRef = ref(db, `/vehicles/${vehicleId}`);
    return remove(vehicleRef);
  };
  
  export default {
    getAllVehicles,
    addVehicle,
    updateVehicle,
    deleteVehicle
  };