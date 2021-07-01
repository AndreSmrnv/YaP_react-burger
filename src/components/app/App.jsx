import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppHeader from "../app-header";
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';
import IngredientDetails from '../ingredient-details/IngredientDetails';
import Modal from '../modal/Modal';
import OrderDetails from '../order-details';
import { getIngredients } from '../../services/actions/ingredients';
import { getOrderNumber } from '../../services/actions/order';

import styles from './App.module.css';

const INIT_APP = { data: null, idDataSet: null, isFetching: false, error: null };
const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
// const API_HEADERS = { 'Content-Type': 'application/json' };

function App() {
  const dispatch = useDispatch();
  //const [state, setState] = useState(INIT_APP);
  const state = useSelector(state => state.ingredients);
  const cart = useSelector(state => state.cart);
  const [visibleOrderDetails, setVisibleOrderDetails] = useState(false);
  const [visibleIngredientDetails, setVisibleIngredientDetails] = useState(false);
  //const [dataIngredientDetails, setDataIngredientDetails] = useState({});


  // useEffect(() => {
  // setState(prevState => ({ ...prevState, isFetching: true }));
  // fetch(API_URL)
  //   .then(response => (response.ok)
  //     ? response.json()
  //     : Promise.reject(`api err: ${response.status}`)
  //   )
  //   .then(result => setState(prevState => ({ ...prevState, data: result.data, idDataSet: Date.now(),isFetching: false, error: null })))
  //   .catch(e => {
  //     console.log(e);
  //     setState(prevState => ({ ...prevState, isFetching: false, error: e }));
  //   });

  // }, [])
  useEffect(
    () => {
      dispatch(getIngredients());
    },
    []
  );



  const openModalOrderDetails = () => {
    let idsCard = cart.sortedData.fillers.map(item => item._id);
    console.log(idsCard);
    
    dispatch(getOrderNumber(idsCard));
    setVisibleOrderDetails(true);
  }
  const openModalIngredientDetails = (item) => {
    //setDataIngredientDetails(item);
    setVisibleIngredientDetails(true)
  }

  const closeModal = () => {
    setVisibleOrderDetails(false);
    setVisibleIngredientDetails(false);
  }




  // console.log(state);
   console.log(cart);
  return (
    <div className={styles.wrapper}>
      <header className={styles.nav_panel}>
        <AppHeader />
      </header>
      {state.data && state.data.length && (
        <DndProvider backend={HTML5Backend}>
          <main className={styles.main}>

            <BurgerIngredients prodData={state.data} idDataSet={state.idDataSet} openModal={openModalIngredientDetails} />
            {cart.data.length && <BurgerConstructor prodData={state.data} idDataSet={state.idDataSet} openModal={openModalOrderDetails} />}

          </main>
        </DndProvider>
      )
      }
      {visibleOrderDetails &&
        <Modal modalTitle={null} closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      }
      {visibleIngredientDetails &&
        <Modal modalTitle='Детали ингредиента' closeModal={closeModal} >
          <IngredientDetails  />
        </Modal>
      }
    </div>
  );
}


export default App;
