import {
  ADD_TO_CART,
  GET_PRODUCT_LIST,
  REMOVE_FROM_CART,
  SET_CART_ITEMS,
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
