import React from 'react';
import './video-player.controls.css';

//componente funcional
function VideoPlayerControls(props) {
  return (
    <div className="VideoPlayerControls">
      {props.children}
    </div>
  )
}

export default VideoPlayerControls
