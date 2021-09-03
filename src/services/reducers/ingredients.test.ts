import { ingredientsReducer as reducer, initialState } from "./ingredients";
import {
  TIngredientsActions
} from "../actions";
import * as actions from "../actions";
import * as mocks from '../../utils/mocks';
import * as types from '../types';
import * as actionsTypes from '../constants/actionTypes'

describe("audit ingredientsReducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {} as TIngredientsActions)
        ).toEqual(
            initialState
        );
    });
  
    it(`should handle get items request success - ${actionsTypes.GET_INGREDIENTS_SUCCESS}`, () => {
      const payload = mocks.dataTIngredientFillers as Array<types.TIngredient>;
        expect(
            reducer(
                initialState,
                actions.getIngredientsSuccess(payload)
            )
        )
        .toEqual(
            {
                ...initialState,
                data: mocks.dataTIngredientFillers,          
            }
        );      
    });
  
    it(`should handle get items request - ${actionsTypes.GET_INGREDIENTS_REQUEST}`, () => {      
        expect(
            reducer(
                initialState,
                actions.getIngredientsRequest( )             
            )
        ).toEqual(
          {
                ...initialState,        
                isFetching: true 
            }
        );
    });
  
    it(`should handle get item request failure - ${actionsTypes.GET_INGREDIENTS_FAILED}`, () => {
      expect(
        reducer(        
            initialState,
            actions.getIngredientsFailed( )    
          )
        
      ).toEqual(
        {
            ...initialState,        
            fetchingFailed: true,
          isFetching: false 
          }
      );
    });
     
    
});
  