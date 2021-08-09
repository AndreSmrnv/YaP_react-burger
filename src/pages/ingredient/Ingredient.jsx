import React from 'react';

import {
  IngredientDetails
} from '../../components';
import styles from './Ingredient.module.css';



function IngredientPage() {
  return (
    <div className={ styles.wrapper }>
      <h1 className={ styles.title }>Детали ингредиента</h1>
      <IngredientDetails />
    </div>
  );
}


export default IngredientPage;
