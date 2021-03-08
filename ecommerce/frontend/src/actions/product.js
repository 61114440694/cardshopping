import axios from 'axios';

import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAIL,
    PRODUCT_CART_REQUEST,
    PRODUCT_CART_SUCCESS,
    PRODUCT_CART_FAIL,
    PRODUCT_LISTCART_REQUEST,
    PRODUCT_LISTCART_SUCCESS,
    PRODUCT_LISTCART_FAIL
} from '../actionTypes.js';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get('/api/products');
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
};

const listCarts = () => async (dispatch) => {
  try {
      dispatch({type: PRODUCT_LISTCART_REQUEST});
      const {data} = await axios.get('/api/carts');
      dispatch({type: PRODUCT_LISTCART_SUCCESS, payload: data});
  } catch (error) {
      dispatch({type: PRODUCT_LISTCART_FAIL, payload: error.message});
  }
};

const detailProduct = (productId) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAIL_REQUEST});
        const {data} = await axios.get(`/api/product/${productId}`);
        dispatch({type: PRODUCT_DETAIL_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: PRODUCT_DETAIL_FAIL, payload: error.message});
    }
};

const addCart = (product, num) => async (dispatch) => {

    try {
        dispatch({type: PRODUCT_CART_REQUEST});
        const {data} = await axios.post(`/api/carts/${
            product._id
        }/${num}`);
        dispatch({type: PRODUCT_CART_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: PRODUCT_CART_FAIL, payload: error.message});
    }
};

const delCart = () => async (dispatch) => {
  try {
      dispatch({type: PRODUCT_CART_REQUEST});
      const {data} = await axios.post(`/api/carts`);
      dispatch({type: PRODUCT_CART_SUCCESS, payload: data});
  } catch (error) {
      dispatch({type: PRODUCT_CART_FAIL, payload: error.message});
  }
};



export {
    listProducts,
    detailProduct,
    addCart,
    listCarts,
    delCart
}
