import React, { FC } from 'react';
import {
  Orders
} from '../../components';
import styles from './Orders.module.css';

const OrdersPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Orders />
    </div>  
  );
}

export default OrdersPage;
