//Import
import React from 'react';
import './home-layout.css';

//Componente funcional HomeLayaout
function HomeLayaout(props) {
   
    return(
        <section className="HomeLayout">
            {/**Importamos los hijos */}
            {props.children}
        </section>
    )
   
}

//export
export default HomeLayaout;