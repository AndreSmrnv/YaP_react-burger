import React, { FC, useState } from 'react';
import { useDispatch } from '../../services/hooks';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Input
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ForgotPassword.module.css';
import { INITIAL_FORM_FORGOT_PASSWD } from '../../services/constants/initialValue';
import { TSignDataForgoutPassword } from "../../services/types";
import { getForgotPassword }  from '../../services/actions/sign';



const ForgotPassword: FC = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  
  const [form, setForm] = useState<TSignDataForgoutPassword>(INITIAL_FORM_FORGOT_PASSWD);

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: fieldName, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [fieldName]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //console.log('onSubmit ForgotPassword');
    //console.log(form);
    dispatch(getForgotPassword(form, history));
    e.preventDefault();
    onReset();
  };

  const onReset = () => {
    setForm(INITIAL_FORM_FORGOT_PASSWD);
  }

  return (
    <div className={styles.login}>
      <h3 className={`${styles.title} text text_type_main-medium`}>Восстановление пароля</h3>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.input_container}>
          <Input onChange={onFieldChange} value={form.email} name={"email"} size="default" placeholder={"Укажите e-mail"} />          
          <div className={styles.button_container}>
            <Button type="primary" size="medium">Восстановить</Button>
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

export default ForgotPassword;
