import type { TOrder, TIngredient, TId } from '../types/data';
import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    SET_ORDER_ERROR
} from '../constants/actionTypes';
import { addConstructorIngredient, resetConstructor, TConstructorActions } from './index';
import { checkoutRequest } from '../api';
import { 
  getToken
} from '../token';
import { AppDispatch, AppThunk } from "../types/redux";
import  dataEmpty from '../../utils/mocks/data-mock-empty';

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
};
export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: TOrder;
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
export const getOrderSuccess = (data: TOrder): TOrderActions => ({
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

export const getOrderNumber: AppThunk = (data : Array<TId>) => {
    return function(dispatch: AppDispatch ) {
   
      dispatch(
        getOrderRequest()        
      );
      const accessToken = getToken() as string;  
      checkoutRequest(data,accessToken)
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
            //console.log(result);
          
            dispatch(
              getOrderSuccess(result.order)             
            );

            dispatch(
              resetConstructor()             
            );
            dispatch(
              addConstructorIngredient(
                dataEmpty.find(item => item.type === 'empty') as TIngredient
              )
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
  
