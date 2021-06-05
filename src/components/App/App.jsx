import React, { useState, useEffect } from 'react';
import AppHeader from "../app-header";
import BurgerIngredients from '../burger-ingredients';

import styles from './App.module.css';

const INIT_APP = { data: {}, isFetching: false, error: null };
const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
// const API_HEADERS = { 'Content-Type': 'application/json' };
function App() {

  const [state, setState] = useState(INIT_APP);

  useEffect(() => {  
    setState({ ...state, isFetching: true });
    fetch(
      API_URL      
    )
      .then(response => response.json())
      .then(result => setState({ ...state, data: result.data, isFetching: false }))
      .catch(e => {
        console.log(e);
        setState({ ...state, isFetching: false, error: e });
      });

  }, [])
  console.log(state);
  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients prodData={state.data} />
      </main>
    </div>
  );
}

export default App;
