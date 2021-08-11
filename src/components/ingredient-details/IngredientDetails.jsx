import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import IngredientDetailsItem from "./ingredient-details-item";
import PropTypes from 'prop-types';
import styles from './IngredientDetails.module.css';
import { ITEM_DETAILS } from '../../services/constants/constValue'
import { setViewItem } from '../../services/actions/viewedItem'



function IngredientDetails() {
  const { itemId = '60d3b41abdacab0026a733cd' } = useParams();;
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients);
  useEffect(() => {
    const itemData = ingredients.data?.find(item => item._id === itemId);
    dispatch(setViewItem(itemData));
  }, [itemId]
  );
  //{ item }
  const viewedItem = useSelector(state => state.viewedItem.data);
  console.log(viewedItem);

  return (

    <div className={styles.container}>
      <img
        src={viewedItem.image_large}
        alt={viewedItem.name}
        title={viewedItem.name}
      />
      <h4 className='text text_type_main-medium mt-4 mb-8'>
        {viewedItem.name}
      </h4>
      <ul className={`${styles.details_list} mb-15`}>

        <IngredientDetailsItem title={ITEM_DETAILS.calories} value={viewedItem.calories} />
        <IngredientDetailsItem title={ITEM_DETAILS.proteins} value={viewedItem.proteins} />
        <IngredientDetailsItem title={ITEM_DETAILS.fat} value={viewedItem.fat} />
        <IngredientDetailsItem title={ITEM_DETAILS.carbohydrates} value={viewedItem.carbohydrates} />

      </ul>
    </div>

  );
}

// IngredientDetails.propTypes = {
//   item: PropTypes.shape({
//     _id: PropTypes.string,
//     name: PropTypes.string,
//     type: PropTypes.string,
//     proteins: PropTypes.number,
//     fat: PropTypes.number,
//     carbohydrates: PropTypes.number,
//     calories: PropTypes.number,
//     price: PropTypes.number,
//     image: PropTypes.string,
//     image_mobile: PropTypes.string,
//     image_large: PropTypes.string,
//     __v: PropTypes.number,
//   }).isRequired,

// };

export default IngredientDetails;
