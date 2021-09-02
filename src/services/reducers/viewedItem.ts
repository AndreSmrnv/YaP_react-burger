import type { TIngredient } from '../types/data';
import type { TViewedItemActions } from '../actions';
import {
    SET_VIEW_ITEM,
    RESET_VIEW_ITEM
} from '../constants/actionTypes';

type TViewedItemState = {
  data: TIngredient ;     
  lastUpdated: number | null;
  
}

export const initialState: TViewedItemState = {
  data: {} as TIngredient,
    lastUpdated: null
  };
  
export const viewedItemReducer = (state = initialState, action: TViewedItemActions): TViewedItemState => {
  
    switch (action.type) {
      
      case SET_VIEW_ITEM: {
            return {
                ...state,
                data: action.payload,
                //lastUpdated: Date.now()
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