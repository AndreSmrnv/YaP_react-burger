import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './OrdersCardDetails.module.css';
import { ORDER_STATUS } from '../../services/constants/constValue';
import { formatDistanceDayToNow } from '../../services/functions';



function OrdersCardDetails() {
  
  const { data: order } = useSelector((store) => store.viewedOrder);
  console.log(order);
  

  const createdAt = order.createdAt ? new Date(order.createdAt) : new Date();
  //console.log(  orderIngredients); 

  return (
    <>
      <h2 className={`text text_type_digits-default ${styles.header}`}>
        #{order.number}
      </h2>

      <div className={styles.card_details_wrapper}>
      
        <h2 className="text text_type_main-medium">
          {order.name}
        </h2>
          <p
            className={`text text_type_main-default ${styles.status} ${
              order.status === "done" ? styles.done : ""
            }`}
          >
            {ORDER_STATUS[order.status]}
          </p>
        <h2 className="text text_type_main-medium">
          Состав:
        </h2>
          <div className={styles.ingredients_list}>
            {order.groupedIngredients?.map((ingredient, idx) => (
              <div className={styles.ingredient_wrapper} key={idx}>
                <div
                  className={styles.img_wrapper}
                  style={{ zIndex: `${order.groupedIngredients.length - idx}` }}
                >
                  <div className={styles.img}>
                    <img src={ingredient.image_mobile} width="64" />
                  </div>
                </div>
                <p className={`text text_type_main-default ${styles.name}`}>{ingredient.name}</p>
                <div className={styles.ingredient_cost}>
                  <p className="text text_type_digits-default">{`${ingredient.count}x${ingredient.price}`}</p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ingredients_footer}>
            <p className="text text_type_main-default text_color_inactive">
              {`${formatDistanceDayToNow(createdAt)}, ${format(createdAt, 'HH:mm \'i-\'z')}`}
            </p>
            <div className={styles.ingredient_cost}>
              <p className="text text_type_digits-default">
                {order.orderTotalPrice}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
       
    </div>

    </>
  )

}




export default OrdersCardDetails;
