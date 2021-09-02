import { viewedItemReducer as reducer, initialState } from "./viewedItem";
import {
    TViewedItemActions
} from "../actions";
import * as actions from "../actions";
import * as mocks from '../../utils/mocks';
import * as types from '../types';
import * as actionsTypes from '../constants/actionTypes';

describe("audit viewedItemReducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {} as TViewedItemActions)
        ).toEqual(
            initialState
        );
    });
  
    it(`should handle set view item - ${actionsTypes.SET_VIEW_ITEM}`, () => {
      const payload = mocks.dataTIngredient as types.TIngredient;
        expect(
            reducer(
                initialState,
                actions.setViewItem(payload)
            )
        )
        .toEqual(
            {
                ...initialState,
                data: mocks.dataTIngredient
            }
        );      
    });
  
    it(`should handle reset view item - ${actionsTypes.RESET_VIEW_ITEM}`, () => {
        
          expect(
              reducer(
                  initialState,
                  actions.resetViewItem()
              )
          )
          .toEqual(
              {
                  ...initialState
              }
          );      
      });
     
    
});
  