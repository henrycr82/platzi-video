import React from 'react';
import './timer.css';

//para dar formato a los segundos
//siempre devolveremos 2 digitos por los  segundos 00
function leftPad(number) {
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}

//para dar formato a los segundos que recibimos en (minutos y segundos)
function formattedTime(secs) {
  const minutes = parseInt(secs / 60, 10);//minutos
  const seconds = parseInt(secs % 60, 10);//segundos
  return `${minutes} : ${leftPad(seconds.toString())}`
}

//componente funcional
function Timer(props) {
  return (
    <div className="Timer">
      <p>
        <span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
      </p>
    </div>
  )
}

export default Timer;
