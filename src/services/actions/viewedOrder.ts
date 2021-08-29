import type { TOrder } from '../types/data';
import {
    SET_VIEW_ORDER,
    RESET_VIEW_ORDER,
    GET_VIEW_ORDER_REQUEST,
    GET_VIEW_ORDER_SUCCESS,
    GET_VIEW_ORDER_FAILED,
    SET_VIEW_ORDER_ERROR
} from '../constants/actionTypes';
import { AppDispatch, AppThunk } from "../types";

import { getOrderDetailsRequest } from '../api';

export interface ISetViewOrder {
  readonly type: typeof SET_VIEW_ORDER;
  readonly payload: TOrder;
};
export interface IResetViewOrder {
  readonly type: typeof RESET_VIEW_ORDER;
};  
  
export interface IGetViewOrderRequest {
  readonly type: typeof GET_VIEW_ORDER_REQUEST;
};
export interface IGetViewOrderSuccess {
  readonly type: typeof GET_VIEW_ORDER_SUCCESS;
  readonly payload: TOrder;
};
export interface IGetViewOrderFailed {
  readonly type: typeof GET_VIEW_ORDER_FAILED;
};
export interface ISetViewOrderError {
  readonly type: typeof SET_VIEW_ORDER_ERROR;
  readonly payload: string;
};

export type TViewedOrderActions = 
  | IGetViewOrderFailed
  | IGetViewOrderSuccess
  | IGetViewOrderRequest
  | IResetViewOrder
  | ISetViewOrder
  | ISetViewOrderError
;

export const setViewOrder = (data: TOrder): TViewedOrderActions => ({
  type: SET_VIEW_ORDER,
  payload:  data
  });
export const resetViewOrder = (): TViewedOrderActions => ({
  type: RESET_VIEW_ORDER
});

export const getViewOrderRequest = (): TViewedOrderActions => ({
  type: GET_VIEW_ORDER_REQUEST
});
export const getViewOrderSuccess = (data: TOrder): TViewedOrderActions => ({
  type: GET_VIEW_ORDER_SUCCESS,
  payload:  data
  });
export const getViewOrderFailed = (): TViewedOrderActions => ({
  type: GET_VIEW_ORDER_FAILED
});
export const setViewOrderError = (data: string): TViewedOrderActions => ({
  type: SET_VIEW_ORDER_ERROR,
  payload:  data
  });


function getOrderDetails(id: string | number) {
  return function (dispatch : AppDispatch) {
    //const getOrderDetails = (id) => (dispatch) => {
    //console.log('getOrderDetails0')
    dispatch(
      getViewOrderRequest()
      // {
      // type: GET_VIEW_ORDER_REQUEST
      // }
    );
    getOrderDetailsRequest(id)
      .then(response => response.json()
      )
      .then(result => {
        console.log('getOrderDetails result', result);
        if (!result.success) throw result;
        dispatch(
          getViewOrderSuccess (result.orders[0])
          // {
          // type: GET_VIEW_ORDER_SUCCESS,
          // payload: result.orders[0]
          // }
        );
      })
      .catch(e => {
        // console.log(e);
        dispatch(
          getViewOrderFailed()
          // {
          // type: GET_VIEW_ORDER_FAILED
          // }
        );
        // dispatch({
        //   type: SET_VIEW_ORDER_ERROR ,
        //   payload: e.message
        // });
           
              
      });
    //console.log('getOrderDetails2')
  }
};
  

export {
  // setViewOrder,
  //   resetViewOrder,
    getOrderDetails
};