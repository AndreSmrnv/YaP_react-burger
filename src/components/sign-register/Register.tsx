import React, { FC, useState } from 'react';
import { useDispatch } from '../../services/hooks';
import { Link } from 'react-router-dom';
import {
  Button,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Register.module.css';
import { INITIAL_FORM_REGISTER } from '../../services/constants/initialValue';
import { getRegister }  from '../../services/actions/sign';
import { TSignDataWPassword } from '../../services/types';



const Register: FC = () => {

  const dispatch = useDispatch();  
  const [form, setForm] = useState<TSignDataWPassword>(INITIAL_FORM_REGISTER);

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: fieldName, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [fieldName]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('onSubmit Register');
    dispatch(getRegister(form));
    console.log(form);
    e.preventDefault();
    
    onReset();
  };

  const onReset = () => {
    setForm(INITIAL_FORM_REGISTER);
  }

  return (
    <div className={styles.login}>
      <h3 className={`${styles.title} text text_type_main-medium`}>Регистрация</h3>
      <form className={styles.form} onSubmit={onSubmit} >
        <div className={styles.input_container}>
          <Input onChange={onFieldChange} value={form.name} name={"name"} size="default" placeholder={"Имя"} />
          <Input onChange={onFieldChange} value={form.email} name={"email"} size="default" placeholder={"E-mail"} />
          <PasswordInput onChange={onFieldChange} value={form.password} name="password" size="default" />
          <div className={styles.button_container}>
            <Button type="primary" size="medium">Зарегистрироваться</Button>
          </div>
        </div>
      </form>
      <div className={styles.link_container}>
        <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
          Уже зарегитрированы?
          </p>
        <Link to="/login" className={`${styles.link} text text_type_main-default`}>
          Войти
        </Link>
      </div>
      
    </div>
  );
}

export default Register;
