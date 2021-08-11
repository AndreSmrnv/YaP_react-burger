import React from 'react';

import {
  Orders
} from '../../components';
import styles from './Orders.module.css';



function OrdersPage() {
  return (
    <div className={styles.wrapper}>
      <Orders />
    </div>  
  );
}


export default OrdersPage;
