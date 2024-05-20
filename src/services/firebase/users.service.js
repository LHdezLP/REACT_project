import { ref, push, set, get } from "firebase/database"; 
import db from "./firebase.config";

const refUsers = ref(db, "/users");

// Obtener todos los usuarios
const getAllUsers = () => {
  return get(refUsers); // Aquí debería ser return get(refUsers)
};

// Añadir un nuevo usuario
const addUser = (userData) => {
  const newUsersRef = push(refUsers);
  return set(newUsersRef, userData);
};

export default {
  getAllUsers,
  addUser
};
