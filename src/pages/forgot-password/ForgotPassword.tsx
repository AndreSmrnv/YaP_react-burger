import React, { FC } from 'react';
import {
  ForgotPassword
} from '../../components';
import styles from './ForgotPassword.module.css';

const ForgotPasswordPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ForgotPassword />
    </div>  
  );
}

export default ForgotPasswordPage;
