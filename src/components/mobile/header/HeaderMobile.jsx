
import '@/components/mobile/header/HeaderMobile.css';
import { useState } from 'react';
import { Globe } from 'lucide-react';
import logo from '/iconos/logo-festario.png';
import iconoUbicacion from '/iconos/icono-ubicacion.png';


function HeaderMobile() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const ubicacion = { ciudad: 'Rivera', pais: 'Uruguay' }; // simulada

  return (
    <header className="header-mobile">
      <div className="header-mobile__top">
        <img src={logo} alt="Logo Festoky" className="logo-mobile" />
        <button
          className="menu-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      <div className="header-mobile__search">
        <input type="text" placeholder="Buscar servicios, salones, decoración..." />
      </div>

      <div className="header-mobile__ubicacion">
        <div className="ubicacion-mobile">
  <img src={iconoUbicacion} alt="Ubicación" className="ubicacion__icon" />
  <span>{ubicacion.ciudad}, {ubicacion.pais}</span>
</div>
      </div>

      {menuAbierto && (
        <div className="header-mobile__menu">
          <ul>
            <li><a href="/login">Iniciar sesión</a></li>
            <li><a href="/registro">Registrarse</a></li>
            <li><a href="/mi-fiesta">Mi Fiesta</a></li>
            <li><a href="/mensajes">Mensajes</a></li>
            <li><a href="/crear-invitacion">Crear tu invitación</a></li>
            <li><a href="/favoritos">Favoritos</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default HeaderMobile;
