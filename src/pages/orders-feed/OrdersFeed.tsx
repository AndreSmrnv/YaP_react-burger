import React, { FC } from 'react';
import {
  OrdersFeed
} from '../../components';
import styles from './OrdersFeed.module.css';

const OrdersFeedPage: FC = () => {
  return (
    <div className={styles.wrapper}>      
      <OrdersFeed />
    </div>  
  );
}

export default OrdersFeedPage;
