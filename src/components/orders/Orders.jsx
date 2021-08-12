import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {ProfileNav} from '../../components'

import styles from './Orders.module.css';

import { getLogout }  from '../../services/actions/sign';
import { getRefreshToken }  from '../../services/actions/token';


function Orders() {

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { isAuthorized, user, lastUpdated, isFetching } = useSelector((store) => store.sign);
 

  // useEffect(() => {
  //   if (location.pathname === '/profile/logout') {
  //     const token = getRefreshToken();
  //     if (token) {
  //       dispatch(getLogout(token));
  //       history.push('/login');        
  //     }
  //   }
  // }, [location]);




  return (
    <div className={styles.profile}>
      <div className={styles.nav_container}>
      <ProfileNav />
        <p className={`${styles.nav__text} text text_type_main-default text_color_inactive`}>
          В этом разделе вы можете
          посмотреть свою историю заказов
        </p>
      </div>
      <div className={styles.orders_container} >
        <h4 className='text text_type_main-medium mt-4 mb-8'>
          История заказов...
        </h4>
      </div>
    </div>
  );
  
}

export default Orders;
