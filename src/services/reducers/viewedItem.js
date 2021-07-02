import {
    SET_VIEW_ITEM,
    RESET_VIEW_ITEM
} from '../constants/actionTypes';

const initialState = {
    data: {},    
    lastUpdated: null
  };
  
export const viewedItemReducer = (state = initialState, action) => {
  
    switch (action.type) {
      
      case SET_VIEW_ITEM: {
            return {
                ...state,
                data: action.payload,
                lastUpdated: Date.now()
            };
      }
      case RESET_VIEW_ITEM: {
            return {
                ...state,
                data: initialState.data
            };
      }  
      
      default: {
        return state;
      }
    }
  };