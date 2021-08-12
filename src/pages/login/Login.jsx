import React from 'react';

import {
  Login
} from '../../components';
import styles from './Login.module.css';



function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <Login />
    </div>  
  );
}


export default LoginPage;
