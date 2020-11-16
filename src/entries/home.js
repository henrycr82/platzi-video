//importamos react
import React from 'react';

//importamos Destructuring el método 'render' de 'react-dom'
import { render } from 'react-dom';

//import Playlist from './src/playlist/components/playlist';
//importamos nuestro componente Home
import Home from '../pages/containers/home';

//importamos nuestra data (como el archivo no es un .js se requiere especificarle la extención(.josn))
import data from '../api.json';

//div.home-container del index.html
const homeContainer = document.getElementById('home-container');

//elemto html
//const holaMundo = <h1>Hola Mundo</h1>

//ReactDom.render(que voy a renderizar(elemento o componente de react), donde lo haré);
//para renderizar un componente lo hacemos así:<Media />
//render(<Media type="video" title="¿Que es responsive Desing?" author="Henry Castro" image="./images/covers/responsive.jpg"/>, app);
//propiedad data= a la data que tenemos en  nuestro archivo api.json
//render(<Playlist data={data}/>, homeContainer);
render(<Home data={data} />, homeContainer);