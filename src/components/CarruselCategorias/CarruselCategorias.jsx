import React, { useRef } from 'react';
import './CarruselCategorias.css';
import iconoSalones from '../../assets/icono-salones.png';
import iconoSonido from '../../assets/icono-sonido.png';
import iconoCatering from '../../assets/icono-catering.png';
import iconoDecoracion from '../../assets/icono-decoracion.png';
import iconoShows from '../../assets/icono-shows.png';
import iconoEstetica from '../../assets/icono-estetica.png';
import iconoFotografia from '../../assets/icono-fotografia.png';
import iconoInvitaciones from '../../assets/icono-invitaciones.png';
import iconoAlojamiento from '../../assets/icono-alojamiento.png';
import iconoOrganizacion from '../../assets/icono-organizacion.png';
import iconoServiciosEspeciales from '../../assets/icono-serviciosespeciales.png';
import iconoServiciosParticulares from '../../assets/icono-serviciosparticulares.png';


const categorias = [
  {
    icon: iconoSalones,
    nombre: 'Salones de eventos',
  },
  {
    icon: iconoSonido,
    nombre: 'Sonido y luces',
  },
    {
    icon: iconoCatering,
    nombre: 'Catering y tragos',
  },
  {
    icon: iconoDecoracion,
    nombre: 'Decoración',
  },
    {
    icon: iconoShows,
    nombre: 'Shows y animaciones',
  },
  {
    icon: iconoEstetica,
    nombre: 'Estética femenina y masculina',
  },
    {
    icon: iconoFotografia,
    nombre: 'Fotografía y video',
  },
  {
    icon: iconoInvitaciones,
    nombre: 'Invitaciones y souvenirs',
  },
    {
    icon: iconoAlojamiento,
    nombre: 'Transporte y alojamiento',
  },
  {
    icon: iconoOrganizacion,
    nombre: 'Organización',
  },
    {
    icon: iconoServiciosEspeciales,
    nombre: 'Servicios especiales',
  },
  {
    icon: iconoServiciosParticulares,
    nombre: 'Servicios particulares',
  },
];


function CarruselCategorias() {
  const carruselRef = useRef(null);

  const handlePrev = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="carrusel-categorias">
      <h2 className="titulo-categorias">Explorá por categoría</h2>
      <div className="carrusel-contenedor">
        <button className="carrusel-btn prev" onClick={handlePrev}>‹</button>
        <div className="carrusel" ref={carruselRef}>
          {categorias.map((cat, index) => (
            <div className="categoria-card" key={index}>
              <img src={cat.icon} alt={cat.nombre} className="categoria-icono" />
              <span>{cat.nombre}</span>
            </div>
          ))}
        </div>
        <button className="carrusel-btn next" onClick={handleNext}>›</button>
      </div>
    </section>
  );
}

export default CarruselCategorias;