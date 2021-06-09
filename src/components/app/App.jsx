import React, { useState, useEffect } from 'react';
import AppHeader from "../app-header";
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';
import IngredientDetails from '../ingredient-details/IngredientDetails';

import OrderDetails from '../order-details';

import styles from './App.module.css';

const INIT_APP = { data: {}, isFetching: false, error: null };
const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
// const API_HEADERS = { 'Content-Type': 'application/json' };

function App() {

  const [state, setState] = useState(INIT_APP);
  const [visibleOrderDetails, setVisibleOrderDetails] = useState(false);
  const [visibleIngredientDetails, setVisibleIngredientDetails] = useState(false);
  const [dataIngredientDetails, setDataIngredientDetails] = useState({});


  useEffect(() => {
    setState(prevState => ({ ...prevState, isFetching: true }));
    fetch(
      API_URL
    )
      //.then(response => response.json())
      .then(response => (response.ok)
        ? response.json()
        : Promise.reject(`api err: ${response.status}`)
      )
      .then(result => setState(prevState => ({ ...prevState, data: result.data, isFetching: false, error: null })))
      .catch(e => {
        console.log(e);
        setState(prevState => ({ ...prevState, isFetching: false, error: e }));
      });

  }, [])


  const openModalOrderDetails = () => {
    setVisibleOrderDetails(true)
  }
  const openModalIngredientDetails = (item) => {
    setDataIngredientDetails(item);
    setVisibleIngredientDetails(true)
  }

  const closeModal = () => {
    setVisibleOrderDetails(false);
    setVisibleIngredientDetails(false);
  }




  console.log(state);
  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients prodData={state.data} openModal={openModalIngredientDetails} />
        <BurgerConstructor prodData={state.data} openModal={openModalOrderDetails} />
      </main>

      {visibleOrderDetails && <OrderDetails header={null} closeModal={closeModal} />}
      {visibleIngredientDetails && <IngredientDetails header='Детали ингредиента' closeModal={closeModal} item={dataIngredientDetails} />}

    </div>
  );
}


export default App;
