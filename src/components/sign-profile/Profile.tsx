import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Profile.module.css';
import { INITIAL_FORM_PROFILE } from '../../services/constants/initialValue';
import { updateProfile, getProfile }  from '../../services/actions/sign';
import { TSignDataWPassword } from '../../services/types';


const Profile: FC = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<TSignDataWPassword>(INITIAL_FORM_PROFILE);
  const { isAuthorized, user, lastUpdated, isFetching } = useSelector((store) => store.sign);

  useEffect(
    () => {      
      setForm(prev => ( { ...prev, ...user }))
    },
    [isAuthorized, lastUpdated]
  ); 
  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: fieldName, type } = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [fieldName]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('onSubmit Profile');
    console.log(form);
    dispatch(updateProfile(form));
    e.preventDefault();
    
  };

  const onReset = () => {
    setForm(INITIAL_FORM_PROFILE);
  }


  return (
    
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
   
  );
  
}

export default Profile;
