import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './OrdersCard.module.css';
import PropTypes from "prop-types";
import { STATUS_ORDER } from '../../services/constants/constValue';
import { formatDistanceDayToNow } from '../../services/functions';



function OrdersCard({ order }) {

  const { wsConnected } = useSelector((store) => store.wsSign);
  const { data: ingredients } = useSelector((store) => store.ingredients);
  // console.log(order);
  // console.log(ingredients);  

  const orderIngredients = useMemo(() => {
    const orderIngredientsWDesc = order?.ingredients.map((id) => {
      return ingredients.find(
        (ingredient) => {
          return ingredient._id === id;
        });
    });

    const orderIngredientsWDescGroups = [];
    orderIngredientsWDesc.forEach(
      (element) => {
        const existingGroups = orderIngredientsWDescGroups.find(groupItem => groupItem._id == element._id);
        if (!existingGroups) {          
          const count = order?.ingredients.filter(id => id == element._id).length || 0;
          orderIngredientsWDescGroups.push(
            {
              ...element,
              count 
            }
          );
        }   
    });

    return orderIngredientsWDescGroups;
  }, [order, ingredients]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredients.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);
  }, [orderIngredients]);

  const openModal = () => {
    console.log(wsConnected);
  };

  const createdAt = new Date(order.createdAt);
  //console.log(  orderIngredients); 

  return (
    <>
      <div className={styles.order_item} onClick={openModal}>
        <div className={styles.order_info}>
          <p className={`text text_type_digits-default ${styles.order_number}`}>
            #{order.number}
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {`${formatDistanceDayToNow(createdAt)}, ${format(createdAt, 'HH:mm \'i-\'z')}`}
          </p>
        </div>
        <h2 className="text text_type_main-medium">
          {order.name}
        </h2>
        {wsConnected && (
          <p className={`text text_type_main-default ${order.status === "done" ? styles.done : ""}`}>
            {STATUS_ORDER[order.status]}
        </p>
        )}
        
        <div className={styles.ingredients_info}>
          <div className={styles.ingredients_list}>
            {orderIngredients.map((ingredient, idx) => (
              <div
                className={styles.ingredient_wrapper}
                key={idx}
                style={{ zIndex: `${orderIngredients.length - idx}` }}
              >
                <div className={styles.ingredient}>
                  <img src={ingredient.image_mobile} width="64" />
                  {ingredient.count > 1 && (
                    <div className={styles.count_wrapper}>
                      <p className="text text_type_main-default">
                        {`+${ingredient.count - 1}`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ingredients_price}>
            <p className="text text_type_digits-default">
              {orderTotalPrice}
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>

    </>
  )

}

OrdersCard.propTypes = {
  order: PropTypes.shape(
    {
      number: PropTypes.number,
      _id: PropTypes.string,
      createdAt: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      ingredients: PropTypes.array
    }
  ).isRequired
};


export default OrdersCard;
