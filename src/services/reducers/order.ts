import type { TOrder } from '../types/data';
import type { TOrderActions } from '../actions';

import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    SET_ORDER_ERROR
} from '../constants/actionTypes';

type TOrderState = {
  data: TOrder ,  
  numberOrd: number,
  isFetching: boolean,
  fetchingFailed: boolean,    
  lastUpdated: number | null
  error: string | null
}

export const initialState: TOrderState = {
  data: {} as TOrder,
    numberOrd: 0, 
    isFetching: false,
    fetchingFailed: false,
    lastUpdated: null,
    error: null
  };
  
export const orderReducer = (state = initialState, action: TOrderActions): TOrderState => {
 
    switch (action.type) {
      case GET_ORDER_REQUEST: {
        return {
          ...state,
            numberOrd: 0,
            fetchingFailed: false,  
            isFetching: true
        };
      }
      case GET_ORDER_SUCCESS: {
            return {
                ...state,
                fetchingFailed: false,
                data: action.payload,
                numberOrd: action.payload.number,
                //lastUpdated: Date.now(),
                isFetching: false
            };
      }
      case GET_ORDER_FAILED: {
            return {
                ...state,
                fetchingFailed: true,
                isFetching: false
            };
      }
      case SET_ORDER_ERROR: {
        return {
            ...state,
            fetchingFailed: true,
            error: action.payload
        };
  }
      
      default: {
        return state;
      }
    }
  };
  