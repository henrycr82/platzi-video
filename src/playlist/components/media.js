//Importamos React y por Destructuring importamos Component
//import React, { Component } from 'react';
import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

//Importamos la hoja de estilo
import './media.css';

//Creamos el componente Media
//class Media extends Component {
class Media extends PureComponent {
    
    //inicializamos el estado
    state = {
        author: 'Henry Castro',
    }

    handleClick = (event) => {
        //console.log(this.props.title);

        //Llamamos el método  setState de nuestro componente para cambiar el estado
        //this.setState({
            //author: 'Daniel Castro',
        //});
        
        //le pasamos todas las propiedades que tiene nuestro video
        this.props.openModal(this.props);
    }


    //Método principal render
    render(){
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        //construimos nuestro html usando JSX
        return(
            /* En react los atributos de los elementos (div, img, h3, etc) se llaman propiedades.
            * Estas propiedades se las podemos pasar a nuestro componente para crea contenido dinámico.
            * se las pasamos de la siguiente manera: {this.props.image}, donde 'image' es la propiedad
            * que le pasamos a nuestro componente desde el archivo index.js
            * 
            * onClick={this.handleClick}
            *   this porqué llamo algo que está dentro de la clase Media
            *   handleClick el nombre de la función que estoy creando
            * 
            * Ahora la función handleClick la recibo por las propiedades
            */
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                        src={this.props.cover}
                        alt=""
                        width={260}
                        height={160}
                        className="Media-image"
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    {/* this.state.author Por si queremos colocar el estate en vez del props */}
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

//Para validar las propiedades(props) de los elemtos
//Tipos: string, number, object, array, func, bool, symbol
//     : oneOf(['video','audio']) => para decirle que puede recibir los posibles valores 'video' ó 'audio'
Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    video: PropTypes.oneOf(['video','audio']),
}

export default Media;