import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  BurgerConstructor,
  BurgerIngredients,
  IngredientDetails,
  Modal,
  OrderDetails,
  OrderFailed
} from '../../components';
import {

  IngredientPage
} from '../../pages'
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
  const location = useLocation();
  const history = useHistory();

  // useEffect(
  //   () => {
  //     dispatch(getIngredients());
  //   },
  //   [dispatch]
  // );



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
  const openModalIngredientDetails = () => {
    setVisibleIngredientDetails(true)
  }

  const closeModal = () => {
    visibleOrderDetails && setVisibleOrderDetails(false);
    visibleIngredientDetails && setVisibleIngredientDetails(false);
    visibleOrderFailed && setVisibleOrderFailed(false);
  }

  const match = useRouteMatch('/ingredients/:id');
  console.log(match)
  const background = location.state?.background;
  console.log(background);
  console.log('prePopItem', history.action);
  if (history.action === 'POP' && match && match.isExact) {
    console.log('popItem', history.action);
    return (
      <Switch>
        <Route path="/ingredients/:id">
          <IngredientPage />
        </Route>
      </Switch>
    );
  };


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
          <IngredientDetails />
        </Modal>
      }
    </div>
  );
}


export default HomePage;
