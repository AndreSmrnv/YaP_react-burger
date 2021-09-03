import React, { FC, useState } from 'react';
import { useDispatch } from '../../services/hooks';
import { Link} from 'react-router-dom';
import {
  Button,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Login.module.css';
import { INITIAL_FORM_LOGIN } from '../../services/constants/initialValue'
import { getLogin } from '../../services/actions/sign';
import { TSignDataLogin } from '../../services/types';


const Login: FC = () => {

  const dispatch = useDispatch();
 
  const [form, setForm] = useState<TSignDataLogin>(INITIAL_FORM_LOGIN);
  //const { isAuthorized } = useSelector((store) => store.sign);
  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: fieldName, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [fieldName]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //console.log('onSubmit Login');
    //console.log(form);
    dispatch(getLogin(form));
    e.preventDefault();
    onReset();
  };

  const onReset = () => {
    setForm(INITIAL_FORM_LOGIN);
  }
  
  return (
    <div className={styles.login}>
      <h3 className={`${styles.title} text text_type_main-medium`}>Вход</h3>
      <form className={styles.form} onSubmit={onSubmit} >
        <div className={styles.input_container}>
          <Input onChange={onFieldChange} value={form.email} name={"email"} size="default" placeholder={"E-mail"} />
          <PasswordInput onChange={onFieldChange} value={form.password} name="password" size="default" />
          <div className={styles.button_container}>
            <Button type="primary" size="medium">Войти</Button>
          </div>
        </div>
      </form>
      <div className={styles.link_container}>
        <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
          Вы — новый пользователь?
          </p>
        <Link to="/register" className={`${styles.link} text text_type_main-default`}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.link_container}>
        <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
          Забыли пароль?
          </p>
        <Link to="/forgot-password" className={`${styles.link} text text_type_main-default`}>
          Восстановить пароль
          </Link>
      </div>
    </div>
  );
}

export default Login;
