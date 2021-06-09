import React, { useEffect } from "react";

import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';




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
    <div className={styles.modal_overlay} onClick={closeModal} />
  );
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired
};

export default ModalOverlay;
