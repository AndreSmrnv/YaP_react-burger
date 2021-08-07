import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AppHeader from "../app-header";
import {
  HomePage,
  LoginPage,
  NotFound404Page
} from '../../pages'

import { getIngredients } from '../../services/actions/ingredients';
import { getOrderNumber, setOrderError } from '../../services/actions/order';

import styles from './App.module.css';
import { isImportSpecifier } from 'typescript';

// const INIT_APP = { data: null, idDataSet: null, isFetching: false, error: null };
// const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
// const API_HEADERS = { 'Content-Type': 'application/json' };

function App() {
  const dispatch = useDispatch();
  //const [state, setState] = useState(INIT_APP);
  const state = useSelector(state => state.ingredients);
  const cart = useSelector(state => state.cart);
  const [visibleOrderDetails, setVisibleOrderDetails] = useState(false);
  const [visibleOrderFailed, setVisibleOrderFailed] = useState(false);
  const [visibleIngredientDetails, setVisibleIngredientDetails] = useState(false);
  
  useEffect(
    () => {
      dispatch(getIngredients());
    },
    [dispatch]
  );



  const openModalOrderDetails = () => {
    if (cart.sortedData.fillers.length && Object.keys(cart.sortedData.bun).length) {
      const idsCard = cart.sortedData.fillers.map(item => item._id);
      //console.log(idsCard);      
      dispatch(getOrderNumber(idsCard));
      setVisibleOrderDetails(true);
    } else {
      dispatch(setOrderError("Пустой заказ"));
      setVisibleOrderFailed(true);
    } 
    
  }
  const openModalIngredientDetails = (item) => {    
    setVisibleIngredientDetails(true)
  }

  const closeModal = () => {
    visibleOrderDetails &&  setVisibleOrderDetails(false);
    visibleIngredientDetails && setVisibleIngredientDetails(false);
    visibleOrderFailed && setVisibleOrderFailed(false);
  }




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
        <Route>
          <NotFound404Page />
        </Route>
      </Switch>      
    </div>
  );
}


export default App;
