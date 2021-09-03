import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import { Route, Switch } from 'react-router-dom';
import {
  ProtectedRoute,
  SignRoute,
  AppHeader
} from '..';

import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  OrdersCardDetailsPage,
  OrdersFeedPage,
  NotFound404Page
} from '../../pages';

import { getIngredients } from '../../services/actions/ingredients';
import { getProfile } from '../../services/actions/sign';

import styles from './App.module.css';


const  App: FC = () => {
  const dispatch = useDispatch();
  //const state = useSelector(state => state.ingredients);
  //const cart = useSelector(state => state.cart);

  useEffect(
    () => {
      dispatch(getProfile());
    },
    [dispatch]
  );
  useEffect(
    () => {      
      dispatch(getIngredients());
    },
    [dispatch]
  );

  // console.log(state);
  //console.log(cart);

  return (
    <div className={styles.wrapper}>
      <header className={styles.nav_panel}>
        <AppHeader />
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/feed/:id/:number">
          <OrdersCardDetailsPage />
        </Route>
        <Route path="/feed/:id">
          <OrdersCardDetailsPage />
        </Route>
        <Route exact path="/feed">          
          <OrdersFeedPage />
        </Route>
        <SignRoute path="/login">
          <LoginPage />
        </SignRoute>
        <SignRoute path="/register">
          <RegisterPage />
        </SignRoute>
        <SignRoute path="/forgot-password">
          <ForgotPasswordPage />
        </SignRoute>
        <SignRoute path="/reset-password">
          <ResetPasswordPage />
        </SignRoute>
        <ProtectedRoute path="/profile/orders/:id/:number" exact >
          <OrdersCardDetailsPage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders/:id" exact >
          <OrdersCardDetailsPage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/ingredients/:id">
          <HomePage />
        </Route>
        <Route>
          <NotFound404Page />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
