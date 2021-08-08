import React from 'react';

import {
  ForgotPassword
} from '../../components';
import styles from './ForgotPassword.module.css';



function ForgotPasswordPage() {
  return (
    <div className={styles.wrapper}>
      <ForgotPassword />
    </div>  
  );
}


export default ForgotPasswordPage;
