//imports
import React, { Component } from 'react';
import HomeLayout from '../components/home-layouts';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
//Componente Home
class Home extends Component {
    //estado inicial de nuestro estado
    state = {
        modalVisible: false,
        //handleError: false,
    }

    //función handleOpenModal
    handleOpenModal = (media) => {
        //seteamos el estado a true
        this.setState({
            modalVisible: true,
            media
        })
    }
    
    //función handleCloseModal
    handleCloseModal = (event) => {
        //seteamos el estado a false
        this.setState({
            modalVisible: false
        })
    }

    //función para el manejo de errores
    /*componentDidCatch(error,info){
        this.setState({
            handleError: true,
        })
    }*/
    render() {
        //si hay algún error
        /*if (this.state.handleError) {
            return <p>OOPS! Hay un error</p>
        }*/
        return(
            //renderizamos HomeLayout
            //los componentes que estań dentro del componente HomeLayout son sus hijos
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories 
                        categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}    
                    />
                    {
                        //condicionamos el renderizado del modal (si es visible)
                        this.state.modalVisible &&
                    
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer
                                    autoplay
                                    srs={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

//export
export default Home;