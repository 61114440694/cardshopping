import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailReducer, productCartReducer, productListCartReducer} from './reducers/product.js';

const initialState = {};

const reducers = combineReducers({productList: productListReducer, productDetail: productDetailReducer, productCart: productCartReducer, productListCart: productListCartReducer});

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

export default store;
