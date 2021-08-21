import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './OrdersFeed.module.css';
import {
  WS_CONNECTION_START,  
  WS_CONNECTION_STOP  
} from "../../services/constants/actionTypes";


function OrdersFeed() {
  const dispatch = useDispatch();
  const { isAuthorized, user, lastUpdated, isFetching } = useSelector((store) => store.sign);

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => {
      dispatch({ type: WS_CONNECTION_STOP });
    };
  }, [dispatch]);

    return (
      <h4 className='text text_type_main-medium mt-4 mb-8'>
        Заказы в работе...
      </h4>
    ) 
}
export default OrdersFeed;
