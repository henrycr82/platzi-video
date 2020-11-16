//Imports
import React from 'react';
import Icon from './icon';

//Componente funcional Pause
function Pause(props) {
  return (
    //le heredamos las propiedades que recibimos al componente Icon con spread operator
    <Icon {...props}>
      {/* componente children del componente Icon*/}
      <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
    </Icon>
  )
}

//Export
export default Pause;
