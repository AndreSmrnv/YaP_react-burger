import React from "react";

import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';




function ModalOverlay({ closeModal }) {

  

  return (
    <div className={styles.modal_overlay} onClick={closeModal} />
  );
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired
};

export default ModalOverlay;
