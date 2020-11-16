import React from 'react';
import VolumenIcon from '../../icons/components/volume';
import './volume.css';

function Volume(props) {
  return (
    <button
      className="Volume"
    >
      <VolumenIcon
        color="white"
        size={25}
      />
      <div className="Volume-range">
        {/*
          min={0} Sin Volume
          max={1} Con Volume
          step={.05}  Rangos o pasos por donde se mueve el volume 0........1
        */}
        <input
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </button>
  )
}

export default Volume;
