import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './OrdersFeed.module.css';
import { wsAllInit, wsAllClose } from '../../services/actions';


function OrdersFeed() {
  const dispatch = useDispatch();
  const { isAuthorized, user, lastUpdated, isFetching } = useSelector((store) => store.sign);

  useEffect(() => {
    dispatch( wsAllInit() );
    return () => {
      dispatch( wsAllClose() );
    };
  }, [dispatch]);

    return (
      <h4 className='text text_type_main-medium mt-4 mb-8'>
        Заказы в работе...
      </h4>
    ) 
}
export default OrdersFeed;
