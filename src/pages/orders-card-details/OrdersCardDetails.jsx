import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  OrdersCardDetails
} from '../../components';
import {
  wsAllInit,
  wsAllClose,
  setViewOrder
} from '../../services/actions';

import styles from './OrdersCardDetails.module.css';

function OrdersCardDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { wsConnected, data } = useSelector((store) => store.wsAll);
  const { data: ingredients } = useSelector((store) => store.ingredients);
  const { isLoaded } = useSelector((store) => store.viewedOrder);
  useEffect(() => {
    dispatch(wsAllInit());
    return () => {
      dispatch(wsAllClose());
    };
  }, [dispatch]);


  const order = useMemo(() => {
    return data && data.orders?.find(item => item._id === id)
  }, [data]);
  //console.log(order)
  // if (history.action === 'POP' ) {   

  const orderIngredientsWDetails = useMemo(() => {
    return order?.ingredients.map((id) =>
      ingredients.find(
        ingredient => ingredient._id === id
      )
    )
  }, [order, ingredients]);

  const orderIngredients = useMemo(() => {
    const orderIngredientsWDetailsGroups = [];
    orderIngredientsWDetails?.forEach(
      (elem) => {
        const existingGroups = orderIngredientsWDetailsGroups.find(groupItem => groupItem._id == elem._id);
        if (!existingGroups) {
          const count = order.ingredients?.filter(item => item == elem._id).length || 0;
          orderIngredientsWDetailsGroups.push(
            {
              ...elem,
              count
            }
          );
        }
      });

    return orderIngredientsWDetailsGroups;
  }, [order, orderIngredientsWDetails]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredients.reduce((sum, item) => {
      return (sum += item.price);
    }, 0);
  }, [orderIngredients]);

  if (order?._id.includes(id) && !isLoaded) {
    dispatch(setViewOrder(
      {
        ...order,
        groupedIngredients: orderIngredients,
        ingredientsWDetails: orderIngredientsWDetails,
        orderTotalPrice
      }
    ));
  }
  
  if (!wsConnected) {
    return (
      <h4 className='text text_type_main-medium mt-4 mb-8'>
        Соединяемся с кухней, ожидайте...
      </h4>
    )
  }
  if (!isLoaded) {
    return (
      <h4 className='text text_type_main-medium mt-4 mb-8'>
        Данных о заказе пока нет. Идет загрузка, ожидайте...
      </h4>
    )
  }

  return (
    <div className={styles.wrapper}>
      <OrdersCardDetails />
    </div>
  );
}
export default OrdersCardDetailsPage;
