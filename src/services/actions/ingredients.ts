import type { TIngredient } from '../types/data';
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../constants/actionTypes';
import { getIngredientsRequest } from '../api';
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
    

export function getIngredients() {
    return function(dispatch: (arg0: { type: "GET_INGREDIENTS_REQUEST" | "GET_INGREDIENTS_SUCCESS" | "GET_INGREDIENTS_FAILED" | "ADD_CONSTRUCTOR_INGREDIENT"; items?: any; payload?: { _id: string; name: string; type: string; price: number; image: string; image_mobile: string; image_large: string; __v: number; } | undefined; }) => void) {
      dispatch({
        type: GET_INGREDIENTS_REQUEST
      });
      getIngredientsRequest()
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
            //console.log(result);
          
            dispatch({
              type: GET_INGREDIENTS_SUCCESS,
              items: result.data
            });

            dispatch({
              type: ADD_CONSTRUCTOR_INGREDIENT,
              payload: dataEmpty.find(item=>item.type === 'empty')
            });

          
        })
        .catch(e => {
              console.log(e);
              dispatch({
                type: GET_INGREDIENTS_FAILED
              });
            }) ;
    };
  }