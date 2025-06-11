
export async function obtenerCiudadDesdeCoordenadas(lat, lon) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
    if (!res.ok) throw new Error('Error en la respuesta de Nominatim');

    const data = await res.json();
    return data.address?.city || data.address?.town || data.address?.village || '';
  } catch (err) {
    console.error("❌ Error obteniendo ciudad:", err);
    return '';
  }
}
