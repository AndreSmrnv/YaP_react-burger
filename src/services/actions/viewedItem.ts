import type { TIngredient } from '../types/data';
import {
    SET_VIEW_ITEM,
    RESET_VIEW_ITEM
} from '../constants/actionTypes';

export interface ISetViewItem {
    readonly type: typeof SET_VIEW_ITEM;
    readonly payload: TIngredient;
  };
export interface IResetViewItem {
    readonly type: typeof RESET_VIEW_ITEM;
  };  
    
export type TViewedItemActions = 
    | ISetViewItem
    | IResetViewItem
  ;

export const setViewItem = (data: TIngredient): TViewedItemActions => ({
    type: SET_VIEW_ITEM,
    payload:  data
  });
  
export const resetViewItem = (): TViewedItemActions => ({
    type: RESET_VIEW_ITEM
  });

