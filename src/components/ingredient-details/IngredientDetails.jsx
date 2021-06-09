import React from "react";

import PropTypes from 'prop-types';
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

const IngredientDetails = ({ item }) => {
  
  return (

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

  );
}

IngredientDetails.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  }).isRequired,
  
};

export default IngredientDetails;
