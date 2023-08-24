import {
  ADD_TO_CART,
  GET_PRODUCT_LIST,
  REMOVE_FROM_CART,
  SET_CART_ITEMS,
  SET_SEARCH_QUERY,
  BUY_PRODUCT_PAGE_PRICE,
} from "../../constants/actionTypes";

export function getProduct(data) {
  return {
    type: GET_PRODUCT_LIST,
    id: data,
  };
}

export function cartItems(item) {
  return {
    type: ADD_TO_CART,
    payload: {
      id: item?.id,
      image: item?.image,
      title: item?.title,
      price: item?.price,
    },
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
}
export function setCartItemsAction(cartItems) {
  return {
    type: SET_CART_ITEMS,
    payload: cartItems,
  };
}

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const buyItemPricePage = (product) => ({
  type: BUY_PRODUCT_PAGE_PRICE,
  payload: product,
});
