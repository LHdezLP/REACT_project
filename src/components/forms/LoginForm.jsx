import React, { useState } from 'react';
import usersService from "../../services/firebase/users.service";
import AddTripForm from './AddTripForm'; 

const LoginForm = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false); 

  const handleLogin = () => {
    usersService.getAllUsers().then(snapshot => {
      snapshot.forEach(childSnapshot => {
        const userData = childSnapshot.val();
        if (userData.username === username && userData.password === password) {
          setAuthenticated(true); 
        }
      });
    }).catch(error => {
      console.error("Error al autenticar usuario: ", error);
    });
  };

  const handleLoginSuccess = () => {
    setAuthenticated(false); 
    closeModal();
  };

  return (
    <div>
      {authenticated ? ( 
        <AddTripForm closeModal={closeModal} onSuccess={handleLoginSuccess} />
      ) : (
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
      )}
    </div>
  );
};

export default LoginForm;
