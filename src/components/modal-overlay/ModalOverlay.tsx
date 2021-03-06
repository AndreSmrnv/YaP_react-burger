import React, { FC } from "react";

import styles from './ModalOverlay.module.css';


interface IModalOverlay {
  closeModal: () => void
}

const ModalOverlay: FC<IModalOverlay> = ({ closeModal }) => {
  return (
    <div className={styles.modal_overlay} onClick={closeModal} />
  );
}

export default ModalOverlay;
