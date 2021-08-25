import React from 'react';

import {
  OrdersFeed
} from '../../components';
import styles from './OrdersFeed.module.css';



function OrdersFeedPage() {
  return (
    <div className={styles.wrapper}>      
      <OrdersFeed />
    </div>  
  );
}


export default OrdersFeedPage;
