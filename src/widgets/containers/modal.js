import React, {Component} from 'react';
import {createPortal} from 'react-dom';//Para crear portales

//createPortal(que renderiza, donde renderiza)
class ModalContainer extends Component {
    render(){
        return createPortal(
            this.props.children,
            document.getElementById('modal-container')
        )
    }
}

export default ModalContainer;