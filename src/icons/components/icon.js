//Imports
import React from 'react';

//Componente funcional Icon
function Icon(props) {
    //Destructuring de las propiedades que recibimos
    const {
        color,
        size
    } = props;
    return(
        <svg
            fill={color}
            height={size}
            width={size}
            viewBox="0 0 32 32"
        >
            {props.children}
        </svg>
    )
}

//Export
export default Icon;