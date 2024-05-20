import React, { useState } from 'react';
import usersService from "../../services/firebase/users.service";

const RegisterForm = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const userData = {
      username: username,
      password: password
    };

    usersService.addUser(userData).then(() => {
      alert('Usuario registrado exitosamente!');
      closeModal();
    }).catch((error) => {
      console.error("Error registrando usuario: ", error);
    });
  };

  return (
    <div>
      <h2>Registro</h2>
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
        <button type="button" onClick={handleRegister}>Confirmar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
