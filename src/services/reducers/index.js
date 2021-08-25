
import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './constructor';
import { orderReducer } from './order';
import { viewedItemReducer } from './viewedItem';
import { signReduser } from './sign';
import { wsAllReducer } from './wsAll';
import { wsSignReducer } from './wsSign';
import { viewedOrderReducer } from './viewedOrder'


const rootReducer = combineReducers({
    cart: constructorReducer,
    ingredients: ingredientsReducer,  
    order: orderReducer,
    viewedItem: viewedItemReducer,
    sign: signReduser,
    wsAll: wsAllReducer,
    wsSign: wsSignReducer,
    viewedOrder: viewedOrderReducer
});

export default rootReducer;