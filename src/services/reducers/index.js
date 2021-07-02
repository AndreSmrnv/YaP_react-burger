
import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './constructor';
import { orderReducer } from './order';
import { viewedItemReducer } from './viewedItem';


const rootReducer = combineReducers({
    cart: constructorReducer,
    ingredients: ingredientsReducer,  
    order: orderReducer,
    viewedItem: viewedItemReducer
});

export default rootReducer;