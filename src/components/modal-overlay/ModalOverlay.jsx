import React, { useEffect } from "react";

import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';
import Modal from "../modal";



function ModalOverlay({ closeModal }) {

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

  return (
    <div className={styles.modal_overlay} onClick={closeModal}>
      {/* <Modal closeModal={closeModal} modalTitle={header}>
        {children}
      </Modal> */}
    </div>
  );
}

ModalOverlay.propTypes = {  
  closeModal: PropTypes.func.isRequired
};

export default ModalOverlay;
