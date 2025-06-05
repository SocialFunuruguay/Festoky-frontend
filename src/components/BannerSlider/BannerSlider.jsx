// src/components/BannerSlider.jsx
import React, { useState, useEffect } from 'react';
import './BannerSlider.css';
import banner1 from '../../assets/banners/banner1.jpg';
import banner2 from '../../assets/banners/banner2.jpg';
import banner3 from '../../assets/banners/banner3.jpg';


function BannerSlider({ images = [], interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(autoSlide);
  }, [images.length, interval]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="banner-slider">
      <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentIndex]} alt={`Publicidad ${currentIndex}`} />
      <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
      <div className="slider-dots">
            {images.map((_, index) => (
                <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                />
            ))}
        </div>
    </div>
  );
}

export default BannerSlider;
