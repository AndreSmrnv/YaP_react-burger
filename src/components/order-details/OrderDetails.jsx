import React from "react";

// import PropTypes from 'prop-types';
import orderDone from '../../images/order-done.svg'
// import styles from './OrderDetails.module.css';



const OrderDetails = () => {
  return (
    <>
      <h1 className="text text_type_digits-large mt-30">034536</h1>
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
