import React, { FC } from 'react';
import {
  Login
} from '../../components';
import styles from './Login.module.css';

const LoginPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Login />
    </div>  
  );
}

export default LoginPage;
