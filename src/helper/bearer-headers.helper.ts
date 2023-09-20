export function getBearerHeader() {
  const token = localStorage.getItem('authToken'); // Reemplaza 'tu_nombre_de_token' con el nombre real de tu token en el localStorage
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
