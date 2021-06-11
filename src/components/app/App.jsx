import React, { useState, useEffect } from 'react';
import AppHeader from "../app-header";
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import Modal from '../modal/Modal';

import OrderDetails from '../order-details';

import styles from './App.module.css';

const INIT_APP = { data: null, idDataSet: null,isFetching: false, error: null };
const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
// const API_HEADERS = { 'Content-Type': 'application/json' };

function App() {

  const [state, setState] = useState(INIT_APP);

  const [visibleOrderDetails, setVisibleOrderDetails] = useState(false);
  const [visibleIngredientDetails, setVisibleIngredientDetails] = useState(false);
  const [dataIngredientDetails, setDataIngredientDetails] = useState({});


  useEffect(() => {
    setState(prevState => ({ ...prevState, isFetching: true }));
    fetch(API_URL)
      .then(response => (response.ok)
        ? response.json()
        : Promise.reject(`api err: ${response.status}`)
      )
      .then(result => setState(prevState => ({ ...prevState, data: result.data, idDataSet: Date.now(),isFetching: false, error: null })))
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
      <header className={styles.nav_panel}>
        <AppHeader />
      </header>  
      {state.data &&
        <main className={styles.main}>
        <BurgerIngredients prodData={state.data} idDataSet={state.idDataSet } openModal={openModalIngredientDetails} />
          <BurgerConstructor prodData={state.data} idDataSet={state.idDataSet } openModal={openModalOrderDetails} />
        </main>
      }
      {visibleOrderDetails &&
        <Modal header={null} closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      }
      {visibleIngredientDetails &&
        <Modal header='Детали ингредиента' closeModal={closeModal} >
          <IngredientDetails item={dataIngredientDetails} />
        </Modal>
      }
    </div>
  );
}


export default App;
