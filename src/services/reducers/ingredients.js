import { 
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    
  } from '../constants/actionTypes';
  
  const initialState = {
    data: [],
    isFetching: false,
    fetchingFailed: false,
    lastUpdated: null,
    error: null
  };
  
export const ingredientsReducer = (state = initialState, action) => {
 
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
          data: action.items,
          lastUpdated: Date.now(),
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
  