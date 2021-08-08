import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AppHeader from "../app-header";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFound404Page
} from '../../pages'

import { getIngredients } from '../../services/actions/ingredients';


import styles from './App.module.css';


function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.ingredients);
  const cart = useSelector(state => state.cart);
  
  
  useEffect(
    () => {
      dispatch(getIngredients());
    },
    [dispatch]
  );



 




  // console.log(state);
   console.log(cart);
  return (
    <div className={styles.wrapper}>
      <header className={styles.nav_panel}>
        <AppHeader />
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route path="/reset-password">
          <ResetPasswordPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route>
          <NotFound404Page />
        </Route>
      </Switch>      
    </div>
  );
}


export default App;
