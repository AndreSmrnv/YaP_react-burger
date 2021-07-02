import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED,
    SET_ORDER_ERROR
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
 
    switch (action.type) {
      case GET_ORDER_REQUEST: {
        return {
            ...state,
            fetchingFailed: false,  
            isFetching: true
        };
      }
      case GET_ORDER_SUCCESS: {
            return {
                ...state,
                fetchingFailed: false,
                data: action.payload,
                numberOrd: action.payload.order.number,
                lastUpdated: Date.now(),
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
  