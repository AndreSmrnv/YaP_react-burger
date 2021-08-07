import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppHeader,
  BurgerConstructor,
  BurgerIngredients,
  IngredientDetails,
  Modal,
  OrderDetails,
  OrderFailed
} from '../../components';
import styles from './Login.module.css';



function LoginPage() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.main}> login</h1>

    </div>
  );
}


export default LoginPage;
