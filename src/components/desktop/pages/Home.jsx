import React from 'react';
import '@/components/desktop/pages/Home.css';
import imagenHero from '/iconos/hero-festario.png';
import BannerSlider from "@components/desktop/body/BannerSlider/BannerSlider.jsx";
import banner1 from '/banners/banner1.jpg';
import banner2 from '/banners/banner2.jpg';
import banner3 from '/banners/banner3.jpg';
import CarruselCategorias from '@/components/desktop/body/CarruselCategorias/CarruselCategorias.jsx';



function Home() {
  const bannerImages = [banner1, banner2, banner3];
  return (
    <div className="home">
      {/* Fondo de pantalla completa con overlay */}
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${imagenHero})` }}
      >
        <div className="hero-overlay"></div>

        {/* Banner superpuesto */}
        <BannerSlider images={bannerImages} interval={6000} />
       
      </div>
         <div className="home__bloque-categorias">
    <CarruselCategorias />
  </div>

  <div className="home__categorias">
    <h2>Categorías destacadas</h2>
    <div className="categorias__grid">
      <div className="categoria__card"><h3>Salones</h3></div>
      <div className="categoria__card"><h3>Catering</h3></div>
      <div className="categoria__card"><h3>Decoración</h3></div>
      <div className="categoria__card"><h3>DJ & Música</h3></div>
    </div>
  </div>

      {/* Contenido debajo del fondo + banner */}
      <div className="home__categorias">
        <h2>Categorías destacadas</h2>
        <div className="categorias__grid">
          <div className="categoria__card"><h3>Salones</h3></div>
          <div className="categoria__card"><h3>Catering</h3></div>
          <div className="categoria__card"><h3>Decoración</h3></div>
          <div className="categoria__card"><h3>DJ & Música</h3></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
