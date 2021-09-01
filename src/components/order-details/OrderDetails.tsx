import React, { FC } from "react";
import { useSelector} from '../../services/hooks';
import spinWhite from '../../images/spin-white.svg';
import orderDone from '../../images/order-done.svg';
import { leftFillNum } from '../../services/functions';
import styles from './OrderDetails.module.css';



const OrderDetails: FC = () => {
  const order = useSelector(state => state.order);
  return (
    <>
      <h1 className="text text_type_digits-large mt-30">{leftFillNum(order.numberOrd,7)}</h1>
      <p className="text text_type_main-medium mt-8">
        идентификатор заказа
          </p>
      <img
        className={`mt-15 ${styles.icon_done}`}
        src={order.isFetching ? spinWhite : orderDone}
        alt="Заказ готовится"
      />
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">Дождитесь готовности на орбитальной станции</p>
    </>
  );
}

export default OrderDetails;
