import React, { Component } from 'react'
import { ModalContainer } from './ModalContainer';

class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener('keydown', this.escModalClose)
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escModalClose)
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }
  

  escModalClose = (e) => {
    if(e.code === 'Escape') {
      this.props.closeModal()
    }
  }

  render() {
    return (
      <ModalContainer>
        <div className='modal'>
          {this.props.children}
        </div>
      </ModalContainer>
    );
  }
}

export default Modal;