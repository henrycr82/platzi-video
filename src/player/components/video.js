import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  
  togglePlay() {
    if (this.props.pause) {
      this.video.play()//es el elemto html que esta manejando el video
    } else {
      this.video.pause()
    }
  }

  //Para validar las propiedades que me estan llegando
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }

  //para hacer referencia a mi elemento video
  setRef = element => {
    this.video = element;
  }

  render() {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
    } = this.props;
    
    return (
      <div className="Video">
        <video
          autoPlay={this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          //eventos para el spinner
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    )
  }
}

export default Video;
