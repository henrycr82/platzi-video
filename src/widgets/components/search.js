import React from 'react';
import './search.css';
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

//componente funcional
//como uso un arrow function no hace falta hacer el return
//las propiedades (props) viene del componente de estado /src/widgets/containers/search.js
const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search
