import type { TId, TOrder,TViewedOrder } from '../types/data';
import {
    SET_VIEW_ORDER,
    RESET_VIEW_ORDER,
    GET_VIEW_ORDER_REQUEST,
    GET_VIEW_ORDER_SUCCESS,
    GET_VIEW_ORDER_FAILED,
    SET_VIEW_ORDER_ERROR
} from '../constants/actionTypes';
import { AppDispatch, AppThunk } from "../types/redux";

import { getOrderDetailsRequest } from '../api';

export interface ISetViewOrder {
  readonly type: typeof SET_VIEW_ORDER;
  readonly payload: TViewedOrder;
};
export interface IResetViewOrder {
  readonly type: typeof RESET_VIEW_ORDER;
};  
  
export interface IGetViewOrderRequest {
  readonly type: typeof GET_VIEW_ORDER_REQUEST;
};
export interface IGetViewOrderSuccess {
  readonly type: typeof GET_VIEW_ORDER_SUCCESS;
  readonly payload: TViewedOrder;
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

export const setViewOrder = (data: TViewedOrder): TViewedOrderActions => ({
  type: SET_VIEW_ORDER,
  payload:  data
  });
export const resetViewOrder = (): TViewedOrderActions => ({
  type: RESET_VIEW_ORDER
});

export const getViewOrderRequest = (): TViewedOrderActions => ({
  type: GET_VIEW_ORDER_REQUEST
});
export const getViewOrderSuccess = (data: TViewedOrder): TViewedOrderActions => ({
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


const getOrderDetails: AppThunk = (id: TId) => {
  return function (dispatch : AppDispatch) {
    //const getOrderDetails = (id) => (dispatch) => {
    //console.log('getOrderDetails0')
    dispatch(
      getViewOrderRequest()
      
    );
    getOrderDetailsRequest(id)
      .then(response => response.json()
      )
      .then(result => {
        //console.log('getOrderDetails result', result);
        if (!result.success) throw result;
        dispatch(
          getViewOrderSuccess (result.orders[0])
         
        );
      })
      .catch(e => {
        // console.log(e);
        dispatch(
          getViewOrderFailed()          
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