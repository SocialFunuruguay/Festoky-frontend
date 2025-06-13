import React from "react";
import { useNavigate } from "react-router-dom";
import "./MiPanel.css";

const MiPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="mi-panel-container">
      <h1 className="mi-panel-titulo">Mi Panel de Proveedor</h1>

      <div className="mi-panel-botones">
        <button
          className="mi-panel-boton"
          onClick={() => navigate("/publicar-servicio")}
        >
          Publicar nuevo servicio
        </button>

        <button className="mi-panel-boton" disabled>
          Mis servicios publicados
        </button>

        <button className="mi-panel-boton" disabled>
          Editar perfil de proveedor
        </button>

        <button className="mi-panel-boton" disabled>
          Agenda y recordatorios
        </button>

        <button className="mi-panel-boton" disabled>
          Contratos y presupuestos
        </button>
      </div>

      <p className="mi-panel-info">* Algunas secciones estarán disponibles luego de la entrevista</p>
    </div>
  );
};

export default MiPanel;
