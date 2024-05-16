import { get, ref } from "firebase/database"
import db from "./firebase.config";

const refVehicles = ref(db, "/vehicles")

// Obtener todos los vehículos
const getAllVehicles = () => {
    return get(refVehicles);
  };
  
  // Añadir un nuevo vehículo
  const addVehicle = (vehicleData) => {
    const newVehicleRef = push(refVehicles);
    return set(newVehicleRef, vehicleData);
  };
  
  // Modificar un vehículo existente
  const updateVehicle = (vehicleId, newData) => {
    const vehicleRef = ref(db, `/vehicles/${vehicleId}`);
    return update(vehicleRef, newData);
  };
  
  // Eliminar un vehículo
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