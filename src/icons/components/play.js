//Imports
import React from 'react';
import Icon from './icon';

//Componente funcional Play
function Play(props) {
    return(
        //le heredamos las propiedades que recibimos al componente Icon con spread operator
        <Icon {...props}>
            {/* componente children del componente Icon*/}
            <path d="M6 4l20 12-20 12z"></path>
        </Icon>
    )
}

//Export
export default Play;