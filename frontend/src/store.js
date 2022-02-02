import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
<<<<<<< HEAD

const reducer = combineReducers({})

const initialState = {}
=======
import { productListReducer, productDetailsReducer} from './reducers/productReducers';
import { categoryListReducer, categoryDetailsReducer} from './reducers/categoryReducers';
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    categoryList: categoryListReducer,
    categoryDetails: categoryDetailsReducer,
    cart: cartReducer
})

let cartItemsFromStorage = []
if (localStorage.getItem('cartItems') != undefined) {
    cartItemsFromStorage= JSON.parse(localStorage.getItem('cartItems'))
} 



const initialState = {
    cart: {cartItems: cartItemsFromStorage}
}
>>>>>>> b5961c8eeb1c87863a98cbc7c9a0cfcd44eb4d22

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store