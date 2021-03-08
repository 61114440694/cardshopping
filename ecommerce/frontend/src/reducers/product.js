import {
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL,
  PRODUCT_CART_REQUEST, PRODUCT_CART_SUCCESS, PRODUCT_CART_FAIL,
  PRODUCT_LISTCART_REQUEST, PRODUCT_LISTCART_SUCCESS, PRODUCT_LISTCART_FAIL
} from '../actionTypes.js';

function productListReducer(state={products: []}, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDetailReducer(state={product: {}}, action) {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productCartReducer(state={product: {}}, action) {
  switch (action.type) {
    case PRODUCT_CART_REQUEST:
      return { loading: true };
    case PRODUCT_CART_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_CART_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function productListCartReducer(state={product: []}, action) {
  switch (action.type) {
    case PRODUCT_LISTCART_REQUEST:
      return { loading: true };
    case PRODUCT_LISTCART_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_LISTCART_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export { productListReducer, productDetailReducer, productCartReducer, productListCartReducer };
