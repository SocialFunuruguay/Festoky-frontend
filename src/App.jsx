import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import Registro from './pages/Registro';
import Perfil from './pages/Perfil';

import RutaPrivada from './RutaPrivada'; // 👈 importamos

function App() {
  return (
    <>
      <Header />
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

        {/* Podés agregar más protegidas así: */}
        {/* <Route path="/mi-fiesta" element={<RutaPrivada><MiFiesta /></RutaPrivada>} /> */}
      </Routes>
    </>
  );
}

export default App;
