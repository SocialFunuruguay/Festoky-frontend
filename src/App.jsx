import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/desktop/header/Header';
import HeaderMobile from '@/components/mobile/header/HeaderMobile';
import Home from '@/components/desktop/pages/Home';
import LoginForm from '@/components/LoginForm';
import Registro from '@/components/desktop/pages/Registro';
import Perfil from '@/components/desktop/pages/Perfil';
import RutaPrivada from '@/RutaPrivada';
import SerProveedor from '@/components/desktop/header/SerProveedor';
import MiPanel from '@/components/desktop/pages/MiPanel';




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
        <Route path="/ser-proveedor" element={<SerProveedor />} />

        {/* Rutas protegidas */}
        <Route
          path="/perfil"
          element={
            <RutaPrivada>
              <Perfil />
            </RutaPrivada>
          }
        />
        <Route
          path="/mi-panel"
          element={
            <RutaPrivada>
              <MiPanel />
            </RutaPrivada>
          }
        />

      </Routes>
    </>
  );
}

export default App;
