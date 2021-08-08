
import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './constructor';
import { orderReducer } from './order';
import { viewedItemReducer } from './viewedItem';
import { signReduser } from './sign';


const rootReducer = combineReducers({
    cart: constructorReducer,
    ingredients: ingredientsReducer,  
    order: orderReducer,
    viewedItem: viewedItemReducer,
    sign: signReduser
});

export default rootReducer;