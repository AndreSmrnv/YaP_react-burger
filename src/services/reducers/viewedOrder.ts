import type { TOrder, TViewedOrder } from '../types/data';
import type { TViewedOrderActions } from '../actions';

import {
    SET_VIEW_ORDER,
  RESET_VIEW_ORDER,
  GET_VIEW_ORDER_REQUEST,
  GET_VIEW_ORDER_SUCCESS,
  GET_VIEW_ORDER_FAILED,
  SET_VIEW_ORDER_ERROR
} from '../constants/actionTypes';

type TViewedOrderState = {
  data: TViewedOrder;
  isLoaded: boolean,
  lastUpdated: number | null;
  isFetching: boolean,
  fetchingFailed: boolean,  
  error: string | null
}

const initialState: TViewedOrderState = {
  data: {} as TViewedOrder,
  isLoaded: false,
  lastUpdated: null,
  isFetching: false,
  fetchingFailed: false,  
  error: null
 };
  
export const viewedOrderReducer = (state = initialState, action: TViewedOrderActions): TViewedOrderState => {
  
    switch (action.type) {
      
      case SET_VIEW_ORDER: {
            return {
              ...state,
              data: action.payload,
              isLoaded: true,
              lastUpdated: Date.now()
            };
      }
      case RESET_VIEW_ORDER: {
            return {
                ...state,
                data: initialState.data
            };
      }  
      case GET_VIEW_ORDER_REQUEST: {
        return {
            ...state,
            fetchingFailed: false,  
            isFetching: true
        };
      }
      case GET_VIEW_ORDER_SUCCESS: {
            //console.log('GET_VIEW_ORDER_SUCCESS',action.payload)
            return {
                ...state,
                fetchingFailed: false,
                data: action.payload,
                isLoaded: false,
                lastUpdated: Date.now(),
                isFetching: false
            };
      }
      case GET_VIEW_ORDER_FAILED: {
            return {
                ...state,
                fetchingFailed: true,
                isFetching: false
            };
      }
      case SET_VIEW_ORDER_ERROR: {
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