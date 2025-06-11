// src/pages/mobile/Login.jsx
import React, { useState } from 'react';
import '@/Login.css';

function LoginMobile() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // lógica de login para mobile (si es distinta)
  };

  return (
    <div className="login-mobile-container">
      <h2>Bienvenido a Festoky</h2>
      <p>Inicia sesión para organizar tu evento desde tu móvil</p>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Ingresar</button>

      <p className="registro-link">
        ¿No tenés cuenta? <a href="/registro">Registrate</a>
      </p>
    </div>
  );
}

export default LoginMobile;
