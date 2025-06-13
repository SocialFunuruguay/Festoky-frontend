import React from "react";
import { useNavigate } from "react-router-dom";
import "./MiPanel.css"; // podés crear este archivo para los estilos personalizados

const MiPanel = () => {
  const navigate = useNavigate();

  const handleNavegar = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="panel-proveedor">
      <h1>Bienvenido al Panel del Proveedor</h1>
      <p>Desde aquí podés gestionar tus servicios</p>

      <div className="panel-botones">
        <button onClick={() => handleNavegar("/proveedor/agregar-servicio")}>Agregar Servicio</button>
        <button onClick={() => handleNavegar("/proveedor/mis-servicios")}>Mis Servicios</button>
        <button onClick={() => handleNavegar("/proveedor/estadisticas")}>Estadísticas</button>
      </div>
    </div>
  );
};

export default MiPanel;
