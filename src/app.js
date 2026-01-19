import React, { useState } from 'react';
import './app.css';

function Aplicacion() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    
    setUsuario(null);
    setError(false);
    
    if (!nombreUsuario.trim()) return;
    
    try {
      const respuesta = await fetch(`https://api.github.com/users/${nombreUsuario}`);
      if (!respuesta.ok) {
        setError(true);
        return;
      }
      const datosUsuario = await respuesta.json();
      setUsuario(datosUsuario);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="contenedor">
      <h1>Buscador de Usuarios GitHub</h1>
      
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          placeholder="Introduce nombre de usuario"
        />
        <button type="submit">Buscar</button>
      </form>
      
      {error && <div className="mensaje-error">El usuario no existe</div>}
      
      {usuario && (
        <div className="info-usuario">
          <h2>{usuario.login}</h2>
          <img src={usuario.avatar_url} alt={`Avatar de ${usuario.login}`} width="150" />
          <p>
            <a href={usuario.html_url} target="_blank" rel="noopener noreferrer">
              Ver perfil en GitHub
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Aplicacion;
