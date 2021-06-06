import React from "react";
import ReactDOM from "react-dom";
import styles from './ModalOverlay.module.css';
import Modal from "../modal";

const modalRoot = document.querySelector('#app-modals');

function ModalOverlay({ children, closeModal, modalTitle }) {
  return ReactDOM.createPortal(
    <div className={styles.modal_overlay} onClick={closeModal} >
      <Modal closeModal={closeModal} modalTitle={modalTitle}>
        {children}
      </Modal>
    </div>,
    modalRoot,
  );
}


export default ModalOverlay;
