import React, { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { useParams, useHistory } from "react-router-dom";
import {
  OrdersCardDetails
} from '../../components';
import {
  wsAllInit,
  wsAllClose,
  setViewOrder,
  getOrderDetails
} from '../../services/actions';

import styles from './OrdersCardDetails.module.css';
import { TGroupedIngredient, TId } from "../../services/types";

interface IParams {
  id: string,
  number: string
}
const OrdersCardDetailsPage: FC = () => {
  const { id, number } = useParams<IParams>();
  const dispatch = useDispatch();
  //const history = useHistory();
  //const { wsConnected, data } = useSelector((store) => store.wsAll);
  const { data: ingredients } = useSelector((store) => store.ingredients);
  const {
    isLoaded,
    isFetching,
     data: order
  } = useSelector((store) => store.viewedOrder);

  useEffect( () => {
      dispatch(
        getOrderDetails(number)
      )
    },
    [dispatch]
  );

  

  // useEffect(() => {
  //   dispatch(wsAllInit());
  //   return () => {
  //     dispatch(wsAllClose());
  //   };
  // }, [dispatch]);


  // const order = useMemo(() => {
  //   return data && data.orders?.find(item => item._id === id)
  // }, [data]);
  //console.log('isFetching - ', isFetching)
  //console.log(order)
 // console.log('isLoaded - ',isLoaded)
  // if (history.action === 'POP' ) {   
    
  const orderIngredientsWDetails = useMemo(() => {
    return order?.ingredients?.map((idItem) =>
      ingredients.find(
        ingredient => ingredient._id === idItem
      )
    )
  }, [order, ingredients]);
  //console.log('orderIngredientsWDetails ', orderIngredientsWDetails)
  
  const orderIngredients = useMemo(() => {
    const orderIngredientsWDetailsGroups: Array<TGroupedIngredient> = [];
    orderIngredientsWDetails?.length && orderIngredientsWDetails.forEach(
      (elem) => {
        const existingGroups = orderIngredientsWDetailsGroups.find(groupItem => groupItem._id === elem?._id);
        if (!existingGroups) {
          const count = order.ingredients?.filter(item => item === elem?._id).length || 0;
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
      return (sum += item.price*item.count);
    }, 0);
  }, [orderIngredients]);

  

  if (!isLoaded && (order?._id === id) && orderTotalPrice ) {
    dispatch(setViewOrder(
      {
        ...order,
        groupedIngredients: orderIngredients,
        ingredientsWDetails: orderIngredientsWDetails,
        orderTotalPrice
      }
    ));
  }
  
    if (isFetching) {
      return (
        <h4 className={`text text_type_main-medium mt-4 mb-8 ${styles.wrapper}`}>
          Соединяемся с кухней, ожидайте...
        </h4>
      )
    }
    if (isLoaded && !order) {
      return (
        <h4 className={`text text_type_main-medium mt-4 mb-8 ${styles.wrapper}`}>
          Данных о заказе пока нет. Идет загрузка, ожидайте...
        </h4>
      )
    }
    if (order?._id !== id || !orderTotalPrice) {
      return (
        <h4 className={`text text_type_main-medium mt-4 mb-8 ${styles.wrapper}`}>
          Ищем заказ, ожидайте...
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
