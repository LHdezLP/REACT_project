import React, { useState } from 'react';
import usersService from "../../services/firebase/users.service";

const LoginToModify = ({ closeModal, onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false); 

  const handleLogin = () => {
    usersService.getAllUsers().then(snapshot => {
      let userAuthenticated = false;
      snapshot.forEach(childSnapshot => {
        const userData = childSnapshot.val();
        if (userData.username === username && userData.password === password) {
          userAuthenticated = true;
          setAuthenticated(true); 
        }
      });
      if (userAuthenticated) {
        onSuccess(true); // Call onSuccess with true if authentication is successful
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    }).catch(error => {
      console.error("Error al autenticar usuario: ", error);
    });
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>Confirmar</button>
      </form>
    </div>
  );
};

export default LoginToModify;
