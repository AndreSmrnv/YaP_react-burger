import {
  GET_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_INGREDIENT,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from '../constants/actionTypes';
import { getIngredientsRequest } from '../api';
import  dataEmpty from '../../utils/data-mock-empty';




export function getIngredients() {
    return function(dispatch) {
      dispatch({
        type: GET_INGREDIENTS_REQUEST
      });
      getIngredientsRequest()
        .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
            //console.log(result);
          
            dispatch({
              type: GET_INGREDIENTS_SUCCESS,
              items: result.data
            });

            dispatch({
              type: ADD_CONSTRUCTOR_INGREDIENT,
              payload: dataEmpty.find(item=>item.type === 'empty')
            });

          
        })
        .catch(e => {
              console.log(e);
              dispatch({
                type: GET_INGREDIENTS_FAILED
              });
            }) ;
    };
  }