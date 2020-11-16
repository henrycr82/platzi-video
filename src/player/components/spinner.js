import React from 'react';
import './spinner.css';

//componenter funcional
function Spinner(props) {
  //si la propiedad active es false no se renderiza el componente
  if (!props.active) return null
  return (
    <div className="Spinner">
      <span>Cargando...</span>
    </div>
  )
}

export default Spinner
