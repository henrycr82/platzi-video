import React, { Component } from 'react';
import Search from '../components/search';

//Componente de estado
class SearchContainer extends Component {
  
  //seteo el valor inicial del input (manejando estados)
  state = {
    value: 'Luis Fonsi'
  }

  //función para prevenir el submit
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit')
    //aqui podria enviar los datos al servidor

  }

  //Para obtener el valor del input del formulario y poder usarlo en la clase
  setInputRef = element => {
    this.input = element;
  }

  //cuando ocurra un cambio en el input seteo el estado
  //y de la cadena del input intercambio los espacios en blanco por guiones replace(' ', '-')
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }

  //setRef es el valor del input del formulario (/src/widgets/components/search.js)
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default SearchContainer;
