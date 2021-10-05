import { Component, useState, useEffect } from "react";
import { ModalContainer } from "./ModalContainer";

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", escModalClose);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", escModalClose);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  }, []);

  const escModalClose = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  return (
    <ModalContainer>
      <div className="modal">{children}</div>
    </ModalContainer>
  );
};

export default Modal;

// ======================класс===========================

// class Modal extends Component {

//   componentDidMount() {
//     window.addEventListener('keydown', this.escModalClose)
//     const body = document.querySelector("body");
//     body.style.overflow = "hidden";
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.escModalClose)
//     const body = document.querySelector("body");
//     body.style.overflow = "auto";
//   }

//   escModalClose = (e) => {
//     if(e.code === 'Escape') {
//       this.props.closeModal()
//     }
//   }

//   render() {
//     return (
//       <ModalContainer>
//         <div className='modal'>
//           {this.props.children}
//         </div>
//       </ModalContainer>
//     );
//   }
// }

// export default Modal;
