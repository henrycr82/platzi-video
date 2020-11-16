//imports
import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';

//Componente funcional Categories
function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.categories.map((item) =>{
          return (
              <Category 
                key={item.id}
                {...item}
                handleOpenModal={props.handleOpenModal}
              />
            )
        })
      }
    </div>
  )
}

//export
export default Categories