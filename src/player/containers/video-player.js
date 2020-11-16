import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer.js';
import Controls from '../components/video-player-controls.js';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

//componente de estado
class VideoPlayer extends Component {
  
  //estados iniciales
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
  }

  //Si se esta o no reproduciendo el video
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  //para saber el estado inicial del estado (si el autoplay esta activo)
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  //Lo que ocurre cuando se carga la metadata
  handleLoadedMetadata = event => {
    this.video = event.target; //event.target es quien dispara el evento
    this.setState({
      duration: this.video.duration
    });
  }

  //para verificar el tiempo transcurrido
  handleTimeUpdate = event => {
    // console.log(this.video.currentTime)
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  //barra de progreso del video
  handleProgressChange = event => {
    // event.target.value
    this.video.currentTime = event.target.value
  }

  //propiedades para el spinner
  //en este momento el componente comienza a cargar
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  //en este momento el componente deja de cargar
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  //Para el volume. El volume que le seteo
  handleVolumeChange = event => {
    this.video.volume = event.target.value;
  }

  //Para el FullScreen. Funciona solo en Chrome
  handleFullScreenClick = event => {
    //Si no estoy en FullScreen
    if (!document.webkitIsFullScreen) {
      // mando a full screen
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen();
      // salgo del full screen
    }
  }

  //para hacer referencia al reproductor de video (VideoPlayerLayout)
  setRef = element => {
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.title}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src={this.props.src}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;
