import React from "react";
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = ({ children, closeModal, modalTitle }) => {
  return (
    <section className={styles.modal}>
      <div className={`${styles.header} pr-10 pt-10 pl-10`} >
        <h2 className="text text_type_main-large ">{modalTitle}</h2>
        <CloseIcon type="primary" onClick={closeModal} />
      </div>
      
      {/* <button className={styles.close} onClick={closeModal}>Закрыть окно</button> */}
      { children}
    </section>
  )
}

Modal.propTypes = {
  modalTitle: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element,
};


export default Modal;
