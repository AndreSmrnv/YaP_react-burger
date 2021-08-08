import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  AppHeader,
  BurgerConstructor,
  BurgerIngredients,
  IngredientDetails,
  Modal,
  OrderDetails,
  OrderFailed
} from '../../components';

import { getIngredients } from '../../services/actions/ingredients';
import { getOrderNumber, setOrderError } from '../../services/actions/order';

import styles from './Home.module.css';



function HomePage() {
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
      {/* <header className={styles.nav_panel}>
        <AppHeader />
      </header> */}
      {state.data && state.data.length && (
        <DndProvider backend={HTML5Backend}>
          <main className={styles.main}>

            <BurgerIngredients openModal={openModalIngredientDetails} />
            {cart.data.length && <BurgerConstructor openModal={openModalOrderDetails} />}

          </main>
        </DndProvider>
      )
      }
      {visibleOrderDetails &&
        <Modal modalTitle={null} closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      }
      {visibleOrderFailed &&
        <Modal modalTitle={null} closeModal={closeModal}>
          <OrderFailed />
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


export default HomePage;