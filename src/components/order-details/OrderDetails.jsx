import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import orderDone from '../../images/order-done.svg'
// import styles from './OrderDetails.module.css';

function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, 0);
}

const OrderDetails = () => {
  const order = useSelector(state => state.order);
  return (
    <>
      <h1 className="text text_type_digits-large mt-30">{leftFillNum(order.numberOrd,7)}</h1>
      <p className="text text_type_main-medium mt-8">
        идентификатор заказа
          </p>
      <img className="mt-15" src={orderDone} alt="Заказ готовится" />
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">Дождитесь готовности на орбитальной станции</p>
    </>
  );
}



export default OrderDetails;
