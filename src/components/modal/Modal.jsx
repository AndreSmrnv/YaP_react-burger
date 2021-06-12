import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "../modal-overlay/ModalOverlay";

function Modal({ children, closeModal, modalTitle }) {

  const closeModalByEscKey = (e) => {
    if (e.key === 'Escape')
      closeModal();
    e.stopImmediatePropagation();
  }
  useEffect(() => {
    document.addEventListener('keydown', closeModalByEscKey);
    return () => {
      document.removeEventListener('keydown', closeModalByEscKey);
    };
  }, []);

  const modalRoot = document.querySelector('#app-modals');

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeModal={closeModal} />
      <section className={styles.modal}>
        <div className={`${styles.header} pr-10 pt-10 pl-10`} >
          <h2 className="text text_type_main-large ">{modalTitle}</h2>
          <CloseIcon type="primary" onClick={closeModal} />
        </div>

        {/* <button className={styles.close} onClick={closeModal}>Закрыть окно</button> */}
        {children}
      </section>
    </>,
    modalRoot
  )
}

Modal.propTypes = {
  modalTitle: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element,
};


export default Modal;
