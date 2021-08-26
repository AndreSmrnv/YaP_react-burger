import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { OrdersCard } from '../../components';
import { wsSignInit, wsSignClose } from '../../services/actions';
import styles from './Orders.module.css';


function Orders() {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { wsConnected, data } = useSelector((store) => store.wsSign);
  const { orders } = data;
  useEffect(() => {
    dispatch(wsSignInit());
    return () => {
      dispatch(wsSignClose());
    };
  }, [dispatch]);



  if (!wsConnected)
    return (
      <h4 className='text text_type_main-medium mt-4 mb-8'>
        Соединяемся с сервером, ожидайте...
      </h4>
    )
  if (!orders?.length)
    return (
      <h4 className='text text_type_main-medium mt-4 mb-8'>
        Ваших заказов пока нет...
      </h4>
    )

  return (

    <div className={styles.order_list}>
      {orders?.map((order) =>
        order.ingredients?.length && <OrdersCard key={order._id} order={order} />
      )}
    </div>

  );

}

export default Orders;
