import React, { useState } from 'react';

function FormularioDatos({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [destino, setDestino] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer alguna validación si es necesario

    // Llamamos al callback onSubmit con los datos del formulario
    onSubmit({ nombre, telefono, ubicacion, destino });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="s">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div className="s">
        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
      </div>
      <div className="s">
        <label htmlFor="ubicacion">Ubicación:</label>
        <input type="text" id="ubicacion" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} required />
      </div>
      <div className="s">
        <label htmlFor="destino">Nombre del Hotel/Residencial/Colonia Destino:</label>
        <input type="text" id="destino" value={destino} onChange={(e) => setDestino(e.target.value)} required />
        
       
      </div>
      <div className="s">
        <input type="submit" value="Continuar reserva" />
      </div>
    </form>
  );
}

export default FormularioDatos;
