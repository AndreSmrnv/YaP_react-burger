import React from 'react';

import {
  Register
} from '../../components';
import styles from './Register.module.css';



function RegisterPage() {
  return (
    <div className={styles.wrapper}>
      <Register />
    </div>  
  );
}


export default RegisterPage;
