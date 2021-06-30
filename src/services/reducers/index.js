
import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './constructor';
import { orderReducer } from './order';


const rootReducer = combineReducers({
    cart: constructorReducer,
    ingredients: ingredientsReducer,  
    order: orderReducer,
});

export default rootReducer;