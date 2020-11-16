//Imports
import React from 'react';
import Media from './media';
import './playlist.css';

//Creamos el componente funcional Playlist
function Playlist(props) {
    return(
        <div className="PlayList">
            {
                props.playlist.map((item) => {
                    return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
                })
            }
        </div>
    )
}

export default Playlist;