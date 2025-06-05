import React, { useState, useContext } from 'react';
import './Login.css';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !contraseña) {
      setMensaje('⚠️ Ingresá email y contraseña');
      return;
    }

    try {
      setCargando(true);
      setMensaje('⏳ Verificando...');

      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, contraseña }),
      });

      const data = await res.json();

      if (res.ok) {
        login(email, data.token);
        setMensaje('✅ Inicio de sesión exitoso');
        navigate('/');
      } else {
        setMensaje(data.error || '❌ Error al iniciar sesión');
      }
    } catch (err) {
      setMensaje('❌ Error de conexión');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-banner">
        <h1>Organizá tu fiesta sin estrés</h1>
        <p>
          Encontrá proveedores, compará presupuestos, gestioná invitados y mucho más.
          Todo en un solo lugar, con <strong>Festario</strong>.
        </p>
        <img src="/banner-festario.png" alt="Organización de eventos" />
      </div>

      <div className="login-formulario">
        <h2>Iniciar sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />

        <button className="btn-login" onClick={handleLogin} disabled={cargando}>
          {cargando ? 'Ingresando...' : 'Continuar'}
        </button>

        {mensaje && <p className="mensaje-login">{mensaje}</p>}

        <div className="divider">o continuar con</div>

        <GoogleLogin
          onSuccess={(cred) => console.log("✅ Google token", cred)}
          onError={() => console.log("❌ Error al iniciar con Google")}
        />

        <p className="crear-cuenta">
          ¿No tenés cuenta? <a href="/registro">Crear una cuenta</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
