import React, { useEffect } from 'react';
import '@/components/comunes/ToastBienvenida.css';

function ToastBienvenida({ mensaje, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast-bienvenida">
      <strong>🎉 Bienvenido a Festoky!</strong>
      <p>{mensaje}</p>
    </div>
  );
}

export default ToastBienvenida;
