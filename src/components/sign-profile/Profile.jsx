import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

import {
  Button,
  EmailInput,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Profile.module.css';
import { INITIAL_FORM_PROFILE } from '../../services/constants/initialValue';
import { getLogout, updateProfile }  from '../../services/actions/sign';



function Profile() {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { isAuthorized, user, lastUpdated, isFetching } = useSelector((store) => store.sign);
  const [form, setForm] = useState(INITIAL_FORM_PROFILE);

  useEffect(
    () => {
      setForm(prev => ( { ...prev, ...user }))
    },
    [isAuthorized, lastUpdated]
  ); 

  useEffect(() => {
    if (location.pathname === '/profile/logout') {
      const token = localStorage.getItem('refreshToken');
      if (token) {
        dispatch(getLogout(token));
        history.push('/login');        
      }
    }
  }, [location]);

  const onFieldChange = (e) => {
    const { name: fieldName, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [fieldName]: value }));
  };

  const onSubmit = (e) => {
    console.log('onSubmit Profile');
    console.log(form);
    dispatch(updateProfile(form));
    e.preventDefault();
    
  };

  const onReset = () => {
    setForm(INITIAL_FORM_PROFILE);
  }


  return (
    <div className={styles.profile}>
      <div className={styles.nav_container}>
        <nav>
          <ul className={styles.nav__list}>
            <NavLink to="/profile" exact className={`${styles.nav__item} text text_type_main-medium text_color_inactive`} activeClassName={styles.nav__item_active}>Профиль</NavLink>
            <NavLink to="/profile/orders" className={`${styles.nav__item} text text_type_main-medium text_color_inactive`} activeClassName={styles.nav__item_active}>История заказов</NavLink>
            <NavLink to="/profile/logout" className={`${styles.nav__item} text text_type_main-medium text_color_inactive`} activeClassName={styles.nav__item_active}>Выход</NavLink>
          </ul>
        </nav>
        <p className={`${styles.nav__text} text text_type_main-default text_color_inactive`}>
          В этом разделе вы можете
          изменить свои персональные данные
        </p>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Имя"
          onChange={onFieldChange}
          value={form.name}
          icon="EditIcon"
          name="name"         
          size="default"
        />
        <EmailInput onChange={onFieldChange} value={form.email} name="email" />
        
        <PasswordInput onChange={onFieldChange} value={form.password} name="password" />
        <div className={styles.button_container}>
          <Button type="primary" size="medium">{isFetching ? 'Идет сохранение' : 'Сохранить' }</Button>
        </div>
      </form>
    </div>
  );
  
}

export default Profile;
