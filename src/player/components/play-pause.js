import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';

function PlayPause(props) {
  return (
    <div className="PlayPause">
      {
        //Si el botón pausado tiene el valor de true habilitamos el botón de play
        //caso contrario habilitamos el botón de pause
        props.pause ?
          <button
            onClick={props.handleClick}
          >
            <Play size={25} color="white" />
          </button>
        :
        <button
          onClick={props.handleClick}
        >
          <Pause size={25} color="white" />
        </button>
      }
    </div>
  )
}

export default PlayPause
