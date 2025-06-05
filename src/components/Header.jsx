import logo from '../assets/logo-festario.png';
import './Header.css';
import iconoUbicacion from '../assets/icono-ubicacion.png';
import {useEffect, useState, useContext } from 'react'; // ✅ esta línea ya incluye todo
import { Link } from 'react-router-dom';
import iconoUsuario from '../assets/icono-usuario.png';
import { Globe } from 'lucide-react';
import { AuthContext } from '../AuthContext';



const esProveedor = false;

function Header() {
  const { usuario, logout } = useContext(AuthContext);
  const [ubicacion, setUbicacion] = useState(null);
console.log("USUARIO ACTUAL:", usuario);

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const response = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`);
        const data = await response.json();

        const ciudad = data.address?.city || data.address?.town || data.address?.village || "Ciudad desconocida";
        const pais = data.address?.country || "País desconocido";

        setUbicacion({ ciudad, pais });
      } catch (error) {
        console.error("🌍 Error al obtener la ubicación:", error);
        setUbicacion({ ciudad: "Ubicación no disponible", pais: "" });
      }
    });
  } else {
    console.warn("🌐 Geolocalización no disponible en este navegador");
    setUbicacion({ ciudad: "Ubicación no disponible", pais: "" });
  }
}, []);


  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo de Festario" />
          </Link>
        </div>

        <div className="header__ubicacion">
          {ubicacion?.ciudad && ubicacion?.pais ? (
            <div className="header__ubicacion">
              <img src={iconoUbicacion} alt="Ubicación" className="ubicacion__icon" />
              <span>{ubicacion.ciudad}, {ubicacion.pais}</span>
            </div>
          ) : (
            <p>Detectando ubicación...</p>
          )}
        </div>
        <div className="header__menus">
    {/* Proveedores */}
    <div className="menu__item">
      <span>Proveedores ▾</span>
      <div className="submenu">
        <div className="submenu__column">
          <h4>Salones de eventos</h4>
          <ul>
            <li>Salones de fiesta</li>
            <li>Salones Infantiles</li>
            <li>Barbacoas</li>
            <li>Chacras con salón</li>
            <li>Eventos corporativos</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Sonido y Luces</h4>
          <ul>
            <li>Discotecas</li>
            <li>Luces</li>
            <li>DJs</li>
            <li>Bandas en vivo</li>
            <li>Amplificación</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Catering y tragos</h4>
          <ul>
            <li>Catering tradicional</li>
            <li>Tortas y repostería</li>
            <li>Saladitos</li>
            <li>Barras de Tragos</li>
            <li>Bebidas a consignación</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Decoración</h4>
          <ul>
            <li>Decoración tradicional</li>
            <li>Decoración con globos</li>
            <li>Centros de Mesa</li>
            <li>Flores y arreglos florales</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Shows y animaciones</h4>
          <ul>
            <li>Animacion infantil</li>
            <li>Shows para niños</li>
            <li>Robots Leds</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Estetica Femenina y Masculina</h4>
          <ul>
            <li>Maquillaje profesional</li>
            <li>Manicuría y uñas</li>
            <li>Salon de belleza femenino</li>
            <li>Barbería masculina</li>
            <li>spa y masajes</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Fotografia y Video</h4>
          <ul>
            <li>Fotografía profesional</li>
            <li>Filmación y video</li>
            <li>Drones</li>
            <li>Cabinas de fotos y videos instantaneos</li>
            <li>Streaming del evento</li>
          </ul>
        </div>
                <div className="submenu__column">
          <h4>Invitaciones y souvenirs</h4>
          <ul>
            <li>Invitaciones y souvenirs</li>
            <li>Invitaciones digitales</li>
            <li>Souvenirs personalizados</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Transporte y alojamiento</h4>
          <ul>
            <li>Hoteles y hostales</li>
            <li>Transporte de invitados</li>
            <li>Estacionamientos privados</li>
            <li>Casas en alquiler por día</li>
          </ul>
        </div>
          <div className="submenu__column">
          <h4>Organización</h4>
          <ul>
            <li>Event Planners</li>
            <li>RSVP y confirmación online</li>
          </ul>
        </div>
          <div className="submenu__column">
          <h4>Servicios especiales</h4>
          <ul>
            <li>Glitter bar</li>
            <li>Pirotecnia</li>             
           <li>Generadores</li> 
           <li>Juegos Infantiles</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Servicios particulares</h4>
          <ul>
            <li>Servicios de mozos</li>
            <li>Servicio de porteria y recepción</li> 
            <li>Asistentes de Estacionamientos</li>
            <li>Servicio de limpieza</li>
          </ul>
        </div>
      </div>
    </div>
    {/* Servicios */}
    <div className="menu__item">
      <span>Servicios▾</span>
      <div className="submenu">
        <div className="submenu__column">
          <h4>Salones de eventos</h4>
          <ul>
            <li>Salones de fiesta</li>
            <li>Salones Infantiles</li>
            <li>Barbacoas</li>
            <li>Chacras con salón</li>
            <li>Eventos corporativos</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Sonido y Luces</h4>
          <ul>
            <li>Discotecas</li>
            <li>Luces</li>
            <li>DJs</li>
            <li>Bandas en vivo</li>
            <li>Amplificación</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Catering y tragos</h4>
          <ul>
            <li>Catering tradicional</li>
            <li>Tortas y repostería</li>
            <li>Saladitos</li>
            <li>Barras de Tragos</li>
            <li>Bebidas a consignación</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Decoración</h4>
          <ul>
            <li>Decoración tradicional</li>
            <li>Decoración con globos</li>
            <li>Centros de Mesa</li>
            <li>Flores y arreglos florales</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Shows y animaciones</h4>
          <ul>
            <li>Animacion infantil</li>
            <li>Shows para niños</li>
            <li>Robots Leds</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Estetica Femenina y Masculina</h4>
          <ul>
            <li>Maquillaje profesional</li>
            <li>Manicuría y uñas</li>
            <li>Salon de belleza femenino</li>
            <li>Barbería masculina</li>
            <li>spa y masajes</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Fotografia y Video</h4>
          <ul>
            <li>Fotografía profesional</li>
            <li>Filmación y video</li>
            <li>Drones</li>
            <li>Cabinas de fotos y videos instantaneos</li>
            <li>Streaming del evento</li>
          </ul>
        </div>
                <div className="submenu__column">
          <h4>Invitaciones y souvenirs</h4>
          <ul>
            <li>Invitaciones y souvenirs</li>
            <li>Invitaciones digitales</li>
            <li>Souvenirs personalizados</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Transporte y alojamiento</h4>
          <ul>
            <li>Hoteles y hostales</li>
            <li>Transporte de invitados</li>
            <li>Estacionamientos privados</li>
            <li>Casas en alquiler por día</li>
          </ul>
        </div>
          <div className="submenu__column">
          <h4>Organización</h4>
          <ul>
            <li>Event Planners</li>
            <li>RSVP y confirmación online</li>
          </ul>
        </div>
          <div className="submenu__column">
          <h4>Servicios especiales</h4>
          <ul>
            <li>Glitter bar</li>
            <li>Pirotecnia</li>             
           <li>Generadores</li> 
           <li>Juegos Infantiles</li>
          </ul>
        </div>
        <div className="submenu__column">
          <h4>Servicios particulares</h4>
          <ul>
            <li>Servicios de mozos</li>
            <li>Servicio de porteria y recepción</li> 
            <li>Asistentes de Estacionamientos</li>
            <li>Servicio de limpieza</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
      </div>

      <div className="header__search">
        <input type="text" placeholder="Buscar servicios, salones, decoración..." />
      </div>

      <div className="header__right">
  <div className="proveedor-link">
    <button className="btn-proveedor">Sé Proveedor</button>
  </div>

  {/* Bloque de usuario con menú */}
  <div className="usuario-wrapper">
    <div className="header__usuario">
      <img src={iconoUsuario} alt="Usuario" className="usuario-icono" />
      <div className="usuario-texto">
        {usuario ? (
  <>
    <span className="linea-superior">¡Hola!</span>
    <span className="linea-inferior">{usuario.email}</span>
  </>
) : (
  <>
    <span className="linea-superior">¡Vení a Divertirte!</span>
    <span className="linea-inferior">Identifícate / Regístrate</span>
  </>
)}
      </div>
    </div>

      <div className="usuario-menu">
  <ul>
    {!usuario && (
      <>
        <li className="login-btn"><Link to="/login">Identifícate</Link></li>
          <li className="registro-centro">
          <Link to="/registro">Regístrate</Link>
        </li>
        <li className="linea-separadora"></li>
      </>
    )}

    {/* Opciones comunes siempre visibles */}
    <li className="sutil-opcion">
      <Link to={usuario ? "/mi-fiesta" : "/login"}>Mi Fiesta</Link>
    </li>
    <li className="sutil-opcion">
      <Link to={usuario ? "/mensajes" : "/login"}>Mensajes</Link>
    </li>
    <li className="sutil-opcion">
      <Link to={usuario ? "/mis-presupuestos" : "/login"}>Mis Presupuestos</Link>
    </li>
    <li className="sutil-opcion">
      <Link to={usuario ? "/favoritos" : "/login"}>Favoritos</Link>
    </li>
    <li className="sutil-opcion">
      <Link to={usuario ? "/crear-invitacion" : "/login"}>Crear tu invitación</Link>
    </li>

    {/* Solo se muestra si está logueado */}
    {usuario && (
      <li className="logout-opcion" onClick={logout}>
        <a href="#">Cerrar sesión</a>
      </li>
    )}
  </ul>
</div>



  </div>

  {/* Botón de idioma fuera del wrapper */}
  <div className="header__idioma">
    <button className="btn-idioma" aria-label="Cambiar idioma">
      <Globe size={20} strokeWidth={1.5} />
    </button>
  </div>
</div>

</header>
  );
}

export default Header;
