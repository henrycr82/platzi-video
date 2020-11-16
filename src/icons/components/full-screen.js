//Imports
import React from 'react';
import Icon from './icon';

//Componente funcional FullScreen
function FullScreen(props) {
  return (
    //le heredamos las propiedades que recibimos al componente Icon con spread operator
    <Icon {...props}>
      {/* componente children del componente Icon*/}
      <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
      <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
      <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
      <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
    </Icon>
  )
}

//Export
export default FullScreen;
