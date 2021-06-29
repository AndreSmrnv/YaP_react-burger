import {
    ADD_CONSTRUCTOR_INGREDIENT,
    DELETE_CONSTRUCTOR_INGREDIENT,
    RESET_CONSTRUCTOR
} from '../constants/actionTypes';

const initialState = {
    data: [],
    isFetching: false,
    fetchingFailed: false,
    lastUpdated: null,
    error: null
  };
  
  export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CONSTRUCTOR_INGREDIENT: {
        return {
          ...state,
          isFetching: true
        };
      }
      case DELETE_CONSTRUCTOR_INGREDIENT: {
        return { ...state, fetchingFailed: false, data: action.items, lastUpdated: Date.now(), isFetching: false };
      }
      case RESET_CONSTRUCTOR: {
        return { ...state, initialState };
      }
  
      
      default: {
        return state;
      }
    }
  };