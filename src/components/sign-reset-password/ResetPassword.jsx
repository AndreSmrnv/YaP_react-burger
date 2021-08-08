import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation, Redirect } from 'react-router-dom';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ResetPassword.module.css';
import { INITIAL_FORM_RESET_PASSWD } from '../../services/constants/initialValue'
import { getResetPassword }  from '../../services/actions/sign';


function ResetPassword() {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [form, setForm] = useState(INITIAL_FORM_RESET_PASSWD);

  const onFieldChange = (e) => {
    const { name: fieldName, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [fieldName]: value }));
  };

  const onSubmit = (e) => {
    console.log('onSubmit Login');
    console.log(form);
    dispatch(getResetPassword(form, history));
    e.preventDefault();
    onReset();
  };

  const onReset = () => {
    setForm(INITIAL_FORM_RESET_PASSWD);
  }
  if (history.action === "PUSH" && location.state?.resetPassword) {
    return (
      <div className={styles.login}>
        <h3 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h3>
        <form className={styles.form} onSubmit={onSubmit} >
          <div className={styles.input_container}>
            <PasswordInput onChange={onFieldChange} value={form.password} name="password" size="default" placeholder={"Введите новый пароль"}/>
            <Input onChange={onFieldChange} value={form.token} name="token" size="default" placeholder={"Введите код из письма"} />
            <div className={styles.button_container}>
              <Button type="primary" size="medium">Войти</Button>
            </div>
          </div>
        </form>
        <div className={styles.link_container}>
        <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
          Вспомнили пароль?
          </p>
        <Link to="/login" className={`${styles.link} text text_type_main-default`}>
          Войти
        </Link>
      </div>
      </div>
    );
  }
  
  return (
    <Redirect to="/login" />
  )
}

export default ResetPassword;
