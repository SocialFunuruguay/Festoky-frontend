import React, { useState } from 'react';
import '@/components/desktop/pages/Registro.css';
import { GoogleLogin } from '@react-oauth/google';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const validarEmail = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  const handleRegistro = async () => {
    if (!nombre.trim() || !email.trim() || !contraseña || !confirmarContraseña) {
      setMensaje('⚠️ Todos los campos son obligatorios');
      return;
    }

    if (!validarEmail(email)) {
      setMensaje('❌ Correo inválido');
      return;
    }

    if (contraseña !== confirmarContraseña) {
      setMensaje('❌ Las contraseñas no coinciden');
      return;
    }

    try {
      setCargando(true);
      setMensaje('⏳ Registrando...');

      const res = await fetch('http://localhost:3000/usuarios/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, contraseña, confirmarContraseña })
      });

      const data = await res.json();

      if (res.ok) {
        setMensaje('✅ Cuenta creada. Revisá tu correo.');
        setNombre('');
        setEmail('');
        setContraseña('');
        setConfirmarContraseña('');
      } else {
        setMensaje(data.error || '❌ Error al registrar');
      }
    } catch (err) {
      setMensaje('❌ Error de conexión');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-banner">
        <h1>Empezá a crear momentos inolvidables</h1>
        <p>
          Con <strong>Festario</strong> organizás tu evento ideal desde un solo lugar.
        </p>
        <img src="/banner-festario.png" alt="Organización de eventos" />
      </div>

      <div className="registro-formulario">
        <h2>Crear una cuenta</h2>

        <GoogleLogin
          onSuccess={(cred) => console.log("✅ Google token", cred)}
          onError={() => console.log("❌ Error con Google")}
        />

        <div className="registro-divider">o registrate con tu correo</div>

        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

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

        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmarContraseña}
          onChange={(e) => setConfirmarContraseña(e.target.value)}
        />

        <button className="btn-registrarse" onClick={handleRegistro} disabled={cargando}>
          {cargando ? 'Registrando...' : 'Continuar'}
        </button>

        {mensaje && <p className="mensaje-registro">{mensaje}</p>}

        <p className="ir-login">
          ¿Ya tenés una cuenta? <a href="/login">Iniciar sesión</a>
        </p>
      </div>
    </div>
  );
}

export default Registro;