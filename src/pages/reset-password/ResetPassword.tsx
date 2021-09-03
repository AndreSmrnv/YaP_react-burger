import React, { FC } from 'react';
import {
  ResetPassword
} from '../../components';
import styles from './ResetPassword.module.css';

const ResetPasswordPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <ResetPassword />
    </div>  
  );
}

export default ResetPasswordPage;
