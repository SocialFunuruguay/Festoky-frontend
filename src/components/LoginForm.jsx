import React, { useState, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '@/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const { usuario, login } = useContext(AuthContext);
  const navigate = useNavigate();

  if (usuario) {
    return <Navigate to="/" />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setMensaje('Iniciando sesión...');

    try {
 const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password: contraseña })
});

const data = await res.json();
      if (res.ok) {
        login(email, data.token, data.nombre, data.es_proveedor, data.id);
        setMensaje('¡Bienvenido!');
        navigate(data.es_proveedor ? '/perfil-proveedor' : '/mi-fiesta');
      } else {
        setMensaje(data.error || 'Ocurrió un error al iniciar sesión');
      }
    } catch (err) {
      setMensaje('Error de conexión con el servidor');
    }
  };

  const reenviarVerificacion = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/usuarios`, {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    setMensaje(data.mensaje || '📩 Verificación reenviada');
  };

  return (
    <div className="contenedor-login" style={{ display: 'flex' }}>
      <div className="lado-izquierdo" style={{ flex: 1, background: 'linear-gradient(to bottom right, #ff9900, #ffcc00)', color: '#fff', padding: '4rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>🎉 Organizá tu fiesta sin estrés</h1>
        <p style={{ marginTop: '1rem' }}>Encontrá proveedores, compará presupuestos, gestioná invitados y mucho más. Todo en un solo lugar, con <strong>Festario</strong>.</p>
      </div>

      <div className="lado-derecho" style={{ flex: 1, padding: '4rem', backgroundColor: '#fff' }}>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin} style={{ marginTop: '2rem' }}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ccc' }}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
            style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ccc' }}
          />

          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#ffa500', color: '#fff', border: 'none', borderRadius: '6px' }}>
            Continuar
          </button>
        </form>

        {mensaje.includes('verificar') && (
          <button
            onClick={reenviarVerificacion}
            className="btn-registrarse"
            style={{ marginTop: '1rem' }}
          >
            Reenviar verificación
          </button>
        )}

        <p style={{ textAlign: 'center', margin: '1.5rem 0' }}>o continuar con</p>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log("✅ TOKEN GOOGLE:", credentialResponse);
          }}
          onError={() => {
            console.log("❌ Error al iniciar sesión con Google");
          }}
          type="standard"
          theme="outline"
          size="large"
        />

        <p style={{ marginTop: '2rem', textAlign: 'center' }}>
          ¿No tenés cuenta? <a href="/registro">Crear una cuenta</a>
        </p>
        <p style={{ color: 'red' }}>{mensaje}</p>
      </div>
    </div>
  );
}

export default LoginForm;
