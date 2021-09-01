import React, { FC } from 'react';
import {
  Register
} from '../../components';
import styles from './Register.module.css';

const RegisterPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Register />
    </div>  
  );
}

export default RegisterPage;
