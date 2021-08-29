import type { TOrder } from '../types/data';
import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    SET_ORDER_ERROR
} from '../constants/actionTypes';
import { checkoutRequest } from '../api';
import { 
  getToken
} from '../token';
import { AppDispatch, AppThunk } from "../types";

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
};
export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: Array<TOrder>;
};
export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
};
export interface ISetOrderError {
  readonly type: typeof SET_ORDER_ERROR;
  readonly payload: string;
};
  
export type TOrderActions = 
  | IGetOrderRequest
  | IGetOrderSuccess
    | IGetOrderFailed
    | ISetOrderError
  ;

  export const getOrderRequest = (): TOrderActions => ({
    type: GET_ORDER_REQUEST
});
export const getOrderSuccess = (data: Array<TOrder>): TOrderActions => ({
  type: GET_ORDER_SUCCESS,
  payload:  data
});
export const getOrderFailed = (): TOrderActions => ({
  type: GET_ORDER_FAILED
});
export const setOrderError = (data: string): TOrderActions => ({
  type: SET_ORDER_ERROR,
  payload:  data
});  

export function getOrderNumber(data : Array<string>) {
    return function(dispatch: AppDispatch ) {
   
      dispatch(
        getOrderRequest()        
      );
      const accessToken = getToken();  
      checkoutRequest(data,accessToken)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
            //console.log(result);
          
            dispatch(
              getOrderSuccess(result)             
            );
        })
        .catch(e => {
              //console.log(e);
              dispatch(
                getOrderFailed()                
              );
            }) ;
    };
}
  