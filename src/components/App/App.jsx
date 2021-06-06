import React, { useState, useEffect } from 'react';
import AppHeader from "../app-header";
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';

import OrderDetails from '../order-details';

import styles from './App.module.css';

const INIT_APP = { data: {}, isFetching: false, error: null };
const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
// const API_HEADERS = { 'Content-Type': 'application/json' };

function App() {

  const [state, setState] = useState(INIT_APP);
  const [visibleOrderDetails, setVisibleOrderDetails] = useState(false);
  const [visibleIngredientDetails, setVisibleIngredientDetails] = useState(false);
  useEffect(() => {
    setState(prevState => ({ ...prevState, isFetching: true }));
    fetch(
      API_URL
    )
      .then(response => response.json())
      .then(result => setState(prevState => ({ ...prevState, data: result.data, isFetching: false })))
      .catch(e => {
        console.log(e);
        setState(prevState => ({ ...prevState, isFetching: false, error: e }));
      });

  }, [])
  

    const openModalOrderDetails = () => {
        setVisibleOrderDetails(true)
    }
    
    const closeModal = () => {
        setVisibleOrderDetails(false)
  }
  
  

  console.log(state);
  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients prodData={state.data} />
        <BurgerConstructor prodData={state.data} openModal={openModalOrderDetails}/>
      </main>
      
            {visibleOrderDetails && <OrderDetails header={null} closeModal={closeModal} />}
        
    </div>
  );
}

      
export default App;
