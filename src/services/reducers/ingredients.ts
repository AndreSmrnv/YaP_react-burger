import type { TIngredient } from '../types/data';
import type { TIngredientsActions } from '../actions';
import {
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    
  } from '../constants/actionTypes';

  type TIngredientsState = {
    data: ReadonlyArray<TIngredient>;
    isFetching: boolean,
    fetchingFailed: boolean,    
    lastUpdated: number | null
    error: string | null
  }
    
  export const initialState: TIngredientsState = {
    data: [],
    isFetching: false,
    fetchingFailed: false,
    lastUpdated: null,
    error: null
  };
  
export const ingredientsReducer = (state = initialState, action: TIngredientsActions): TIngredientsState => {
 
    switch (action.type) {
      case GET_INGREDIENTS_REQUEST: {
        return {
          ...state,
          isFetching: true
        };
      }
      case GET_INGREDIENTS_SUCCESS: {
        return {
          ...state,
          fetchingFailed: false,
          data: action.payload,
          //lastUpdated: Date.now(),
          isFetching: false
        };
      }
      case GET_INGREDIENTS_FAILED: {
        return {
          ...state,
          fetchingFailed: true,
          isFetching: false
        };
      }
  
      
      default: {
        return state;
      }
    }
  };
  