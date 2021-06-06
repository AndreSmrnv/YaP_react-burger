import React from "react";
import ModalOverlay from "../modal-overlay";

import styles from './IngredientDetails.module.css';

const ITEM_DETAILS = {
  calories: 'Калории, ккал',
  proteins: 'Белки, г',
  fat: 'Жиры, г',
  carbohydrates: 'Углеводы, г'
};
const IngredientDetailsItem = ({ title, value }) => (
  <li className={styles.details_list_item}>
    <p className="text text_type_main-default text_color_inactive">
      {title}
    </p>
    <p className="text text_type_digits-default text_color_inactive">
      {value}
    </p>
  </li>
);

const IngredientDetails = (props) => {
  const { item } = props;
  return (
    <ModalOverlay  {...props} >
      <div className={styles.container}>
        <img
          src={item.image_large}
          alt={item.name}
          title={item.name}
        />
        <h4 className='text text_type_main-medium mt-4 mb-8'>
          {item.name}
        </h4>
        <ul className={`${styles.details_list} mb-15`}>

          <IngredientDetailsItem title={ITEM_DETAILS.calories} value={item.calories} />
          <IngredientDetailsItem title={ITEM_DETAILS.proteins} value={item.proteins} />
          <IngredientDetailsItem title={ITEM_DETAILS.fat} value={item.fat} />
          <IngredientDetailsItem title={ITEM_DETAILS.carbohydrates} value={item.carbohydrates} />

        </ul>
      </div>


    </ModalOverlay>
  );
}

export default IngredientDetails;
