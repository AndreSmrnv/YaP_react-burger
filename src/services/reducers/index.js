
import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './constructor';


const rootReducer = combineReducers({
    cart: constructorReducer,
    ingredients: ingredientsReducer,  
});

export default rootReducer;