
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/AuthContext';
import ToastBienvenida from '@/components/comunes/ToastBienvenida';
import '@/components/desktop/header/SerProveedor.css';
import { obtenerCiudadDesdeCoordenadas } from '@/utils/geoUtils';

function SerProveedor() {
  const { usuario, setUsuario } = useContext(AuthContext);
  const [nombreProveedor, setNombreProveedor] = useState('');
  const [telefono, setTelefono] = useState(usuario?.telefono || '');
  const [ciudad, setCiudad] = useState('');
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);
  const [exito, setExito] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      alert('Debes iniciar sesión para activar tu perfil proveedor');
      navigate('/login');
    }
  }, [usuario]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          setLatitud(lat);
          setLongitud(lon);

try {
  const ciudadDetectada = await obtenerCiudadDesdeCoordenadas(lat, lon);
  if (ciudadDetectada) setCiudad(ciudadDetectada);
  else setCiudad(''); // o una ciudad por defecto
} catch (err) {
  console.error('Error obteniendo ciudad:', err);
  setCiudad(''); // prevenir que falle todo si la API no responde
}
        },
        (err) => {
          console.warn('🌍 Error al obtener la ubicación:', err);
        }
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!usuario?.id) {
        throw new Error('Usuario no válido');
      }

      const token = localStorage.getItem('token');

      // Actualizar teléfono si cambió
      if (telefono && usuario.telefono && telefono !== usuario.telefono) {
        const resTelefono = await fetch(`${import.meta.env.VITE_API_URL}/usuarios/${usuario.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ telefono })
        });

        if (!resTelefono.ok) {
          const err = await resTelefono.text();
          throw new Error('Error actualizando teléfono: ' + err);
        }

        const dataTel = await resTelefono.json();
        setUsuario((prev) => ({ ...prev, telefono: dataTel.usuario.telefono }));
      }

      // Crear proveedor
      const resProveedor = await fetch(`${import.meta.env.VITE_API_URL}/proveedores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          usuario_id: usuario.id,
          nombre: nombreProveedor,
          ciudad,
          latitud,
          longitud
        })
      });

      if (!resProveedor.ok) {
        const err = await resProveedor.text();
        throw new Error('Error al crear proveedor: ' + err);
      }

      setExito(true);
      setTimeout(() => navigate('/mi-panel'), 2000);
    } catch (error) {
      console.error('❌ Error al activar perfil proveedor:', error);
      alert('Hubo un error al activar el perfil. Intentá de nuevo.');
    }
  };

  return (
    <div className="contenedor-proveedor">
      <div className="box-beneficios">
        <h2>🎉 Beneficios de ser proveedor</h2>
        <ul>
          <li>Publicá tus servicios y promociones</li>
          <li>Contactá con clientes directamente</li>
          <li>Gestioná presupuestos y eventos</li>
          <li>Mayor visibilidad en Festoky</li>
        </ul>
      </div>

      <form className="formulario-proveedor" onSubmit={handleSubmit}>
        <h2>Activá tu perfil proveedor</h2>
        <label>Nombre público del proveedor:</label>
        <input type="text" value={nombreProveedor} onChange={(e) => setNombreProveedor(e.target.value)} required />

        <label>Ciudad:</label>
        <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} required />

        <label>Teléfono de contacto:</label>
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />

        <button type="submit">Crear perfil proveedor</button>
      </form>

      {exito && <ToastBienvenida mensaje="🎉 ¡Bienvenido a Festoky Proveedores!" />}
    </div>
  );
}

export default SerProveedor;
