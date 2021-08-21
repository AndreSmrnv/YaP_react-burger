
import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './constructor';
import { orderReducer } from './order';
import { viewedItemReducer } from './viewedItem';
import { signReduser } from './sign';
import { wsAllReducer } from './wsAll';


const rootReducer = combineReducers({
    cart: constructorReducer,
    ingredients: ingredientsReducer,  
    order: orderReducer,
    viewedItem: viewedItemReducer,
    sign: signReduser,
    wsAll: wsAllReducer
});

export default rootReducer;