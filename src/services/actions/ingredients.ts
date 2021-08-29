import type { TIngredient } from '../types/data';
import {  
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../constants/actionTypes';
import { AppDispatch, AppThunk } from "../types";
import {addConstructorIngredient, TConstructorActions} from './index'
import { apiGetIngredientsRequest } from '../api';
import  dataEmpty from '../../utils/data-mock-empty';

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
};
export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: Array<TIngredient>;
};
export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
};

  
  export type TIngredientsActions = 
  | IGetIngredientsFailed
  | IGetIngredientsSuccess
  | IGetIngredientsRequest
  ;

export const getIngredientsRequest = (): IGetIngredientsRequest => ({
    type: GET_INGREDIENTS_REQUEST
});

export const getIngredientsSuccess = (data: Array<TIngredient>): IGetIngredientsSuccess => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload:  data
});

export const getIngredientsFailed = (): IGetIngredientsFailed => ({
  type: GET_INGREDIENTS_FAILED
});

export function getIngredients() {
    return function(dispatch: AppDispatch) {
      dispatch(
        getIngredientsRequest()
      );
      apiGetIngredientsRequest()
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
            //console.log(result);
          
            dispatch(
              getIngredientsSuccess(result.data)              
            );

            dispatch(
              addConstructorIngredient(
                dataEmpty.find(item => item.type === 'empty')
              )
            );

          
        })
        .catch(e => {
              console.log(e);
          dispatch(
            getIngredientsFailed()            
          );
            }) ;
    };
  }