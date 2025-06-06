import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import Registro from './pages/Registro';
import Perfil from './pages/Perfil';
import RutaPrivada from './RutaPrivada';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rutas protegidas */}
        <Route
          path="/perfil"
          element={
            <RutaPrivada>
              <Perfil />
            </RutaPrivada>
          }
        />
      </Routes>
    </>
  );
}

export default App;
