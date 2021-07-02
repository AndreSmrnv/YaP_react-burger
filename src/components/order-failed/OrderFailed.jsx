import React from "react";
import { useSelector} from 'react-redux';
// import PropTypes from 'prop-types';
import orderDone from '../../images/order-done.svg'
// import styles from './OrderDetails.module.css';

function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, 0);
}

const OrderFailed = () => {
  const order = useSelector(state => state.order);
  return (
    <>
      <h1 className="text text_type_digits-large mt-30">{order.error}</h1>
      <p className="text text_type_main-medium mt-8">
        что-то пошло не так
          </p>
      <img className="mt-15" src={orderDone} alt="Заказ готовится" />
      <p className="text text_type_main-default mt-15">Мы не можем приготовить пустой заказ</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">Соберите бургер и мы его вам приготовим</p>
    </>
  );
}



export default OrderFailed;
