import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';
import Modal from "../modal";

const modalRoot = document.querySelector('#app-modals');

function ModalOverlay({ children, closeModal, header }) {

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

  return ReactDOM.createPortal(
    <div className={styles.modal_overlay} onClick={closeModal} >
      <Modal closeModal={closeModal} modalTitle={header}>
        {children}
      </Modal>
    </div>,
    modalRoot,
  );
}

ModalOverlay.propTypes = {
  header: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default ModalOverlay;
