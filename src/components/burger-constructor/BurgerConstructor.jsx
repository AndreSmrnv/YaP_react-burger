import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT
} from '../../services/constants/actionTypes';
import {
  Button,
  CurrencyIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "./constructor-item";
import PropTypes from "prop-types";
import styles from './BurgerConstructor.module.css';

function BurgerConstructor({ idDataSet, openModal }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const prodData = [...cart.data];

  const onDropHandler = (data) => dispatch({ type: ADD_CONSTRUCTOR_INGREDIENT, payload: data });
  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop: onDropHandler
  });

  const coverData = prodData && Array.isArray(prodData)
    && [cart.sortedData.bun]
    ;
  
  const middleData = prodData && Array.isArray(prodData)
    && cart.sortedData.fillers
    ;
  //const totalBurgerPrice = cart.total;
  const totalBurgerPrice = React.useMemo(
    () =>
      Array.isArray(prodData) &&
      [...coverData, ...middleData].reduce((sum, item) => {
        return sum + item.price;
      }, 0),
    [coverData,middleData]
  );
  //console.log(totalBurgerPrice);

  return (
    <section className={`${styles.container} pt-25`} ref={dropTarget}>
      <ul className={styles.item_list}>
        {coverData && Array.isArray(coverData) && coverData.map((item) => (

          <ConstructorItem
            key={item._id}
            itemData={item}
            type='top'
            isLocked
          />
        )
        )
        }
        <li className={`mb-4`} key='middle'>
          <ul className={styles.scroll_list}>
            {middleData && Array.isArray(middleData) && middleData.map((item, indx) => (

              <ConstructorItem
                key={item._id + indx}
                itemData={item}
                handlerId={indx }
              />

            )
            )
            }
          </ul>


        </li>

        {coverData && Array.isArray(coverData) && coverData.map(item => (
          <ConstructorItem
            key={item._id}
            itemData={item}
            type='bottom'
            isLocked
          />

        )
        )
        }
      </ul>
      <div className={`${styles.checkout_container} pr-8`}>
        <div className="mr-10">
          <span className="text text_type_digits-medium mr-2">
            {totalBurgerPrice}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={openModal}
        >
          Оформить заказ
          </Button>
      </div>

    </section>
  )

}

BurgerConstructor.propTypes = {
  prodData: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default BurgerConstructor;
