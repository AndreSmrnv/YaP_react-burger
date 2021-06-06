import React from "react";
import styles from './Modal.module.css';
import {
  CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = ({ children, closeModal, title }) => {
  return (
    <section className={styles.modal}>
      <div className={`${styles.header} pr-10 pt-10 pl-10`} >
        <h2 className="text text_type_main-large ">{title}</h2>
        <CloseIcon type="primary" onClick={closeModal} />
      </div>
      
      {/* <button className={styles.close} onClick={closeModal}>Закрыть окно</button> */}
      { children}
    </section>
  )
}

export default Modal;
