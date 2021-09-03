import { wsSignReducer as reducer, initialState } from "./wsSign";
import {
    TWsSignActions
} from "../actions";
import * as actions from "../actions";
import * as mocks from '../../utils/mocks';
import * as types from '../types';
import * as actionsTypes from '../constants/actionTypes';

describe("audit wsSignReducer", () => {
    it("should return the initial state", () => {
        expect(
            reducer(undefined, {} as TWsSignActions)
        ).toEqual(
            initialState
        );
    });
  
    it(`should handle connect websocket - ${actionsTypes.WS_SIGN_CONNECTION_SUCCESS}`, () => {
        
        expect(
            reducer(
                initialState,
                actions.wsSignConnectionSuccess()
            )
        )
        .toEqual(
            {
                ...initialState,
                wsConnected: true,
                wsConnectionFailed: false
            }
        );      
    });

    it(`should handle error from websocket - ${actionsTypes.WS_SIGN_CONNECTION_ERROR}`, () => {
      const payload = 'test error ';
        expect(
            reducer(
                initialState,
                actions.wsSignConnectionError(payload)
            )
        )
        .toEqual(
            {
                ...initialState,
                error: payload,
                wsConnected: false,
                wsConnectionFailed: true
            }
        );      
    });

    
    it(`should handle close websocket - ${actionsTypes.WS_SIGN_CONNECTION_CLOSED}`, () => {
        
        expect(
            reducer(
                initialState,
                actions.wsSignConnectionClosed()
            )
        )
        .toEqual(
            {
                ...initialState,
                error: null,
                wsConnected: false,
                wsConnectionFailed: false
            }
        );      
    });
  
    it(`should handle get websocket message  - ${actionsTypes.WS_SIGN_GET_MESSAGE}`, () => {
        const payload: types.TOrderWSAll = mocks.dataTWSAllOrders;
          expect(
              reducer(
                  initialState,
                  actions.wsSignGetMessage(payload)
              )
          )
          .toEqual(
              {
                  ...initialState,
                  data: mocks.dataTWSAllOrders
              }
          );      
      });
     
    
});