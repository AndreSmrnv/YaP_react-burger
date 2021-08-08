import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Profile.module.css';
import { INITIAL_FORM_LOGIN } from '../../services/constants/initialValue'



function Profile() {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
 

  return (
    <div className={styles.profile}>
      <h3 className={`${styles.title} text text_type_main-medium`}>Профиль</h3>
      
    </div>
  );
}

export default Profile;
