import {
    ADD_CONSTRUCTOR_INGREDIENT,
    DELETE_CONSTRUCTOR_INGREDIENT,
    RESET_CONSTRUCTOR
} from '../constants/actionTypes';

const initialState = {
    data: [],
    sortedData: {
        bun: {},
        fillers: []
    },
    total: 0,
    lastUpdated: null
  };
  
  export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CONSTRUCTOR_INGREDIENT: {
        return {
          ...state,
            data: action.items, 
            lastUpdated: Date.now() 
        };
      }
      case DELETE_CONSTRUCTOR_INGREDIENT: {
        return {
            ...state,
            items: state.items.filter(item => action.payload !== item),
            lastUpdated: Date.now() 
          }
      }
      case RESET_CONSTRUCTOR: {
        return { ...state, initialState };
      }
  
      
      default: {
        return state;
      }
    }
  };