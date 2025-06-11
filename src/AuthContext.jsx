import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
const token = localStorage.getItem('token');
const email = localStorage.getItem('email');
const nombre = localStorage.getItem('nombre');
const es_proveedor = localStorage.getItem('es_proveedor') === 'true';
const id = parseInt(localStorage.getItem('id'), 10);


if (token && email && id) {
  setUsuario({ email, nombre, es_proveedor, id });
}

  }, []);

const login = (email, token, nombre, es_proveedor, id) => {
  localStorage.setItem('token', token);
  localStorage.setItem('email', email);
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('es_proveedor', es_proveedor);
  localStorage.setItem('id', id);
  setUsuario({ email, nombre, es_proveedor, id });
};


  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// ✅ Función para consultar el backend
export async function obtenerPerfil() {
  const token = localStorage.getItem('token');

  try {
    const res = await fetch('http://localhost:3000/perfil', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Error al obtener perfil');
    }

    return data;
  } catch (err) {
    console.error('❌ Error al consultar perfil:', err.message);
    return null;
  }
}
