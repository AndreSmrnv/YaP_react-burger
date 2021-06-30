import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED
} from '../constants/actionTypes';

const initialState = {
    data: [],
    numberOrd: 0, 
    isFetching: false,
    fetchingFailed: false,
    lastUpdated: null,
    error: null
  };
  
export const orderReducer = (state = initialState, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }
    switch (action.type) {
      case GET_ORDER_REQUEST: {
        return {
          ...state,
          isFetching: true
        };
      }
      case GET_ORDER_SUCCESS: {
        return { ...state, fetchingFailed: false, data: action.payload, numberOrd: action.payload.order.number, lastUpdated: Date.now(), isFetching: false };
      }
      case GET_ORDER_FAILED: {
        return { ...state, fetchingFailed: true, isFetching: false };
      }
  
      
      default: {
        return state;
      }
    }
  };
  