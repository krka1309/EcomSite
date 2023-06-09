const initialState = {
  id: "",
  cart: [],
  cartItems: [],
  searchQuery: "",
};
function addToCartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            image: action.payload.image,
            title: action.payload.title,
            price: action.payload.price,
          },
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((item, index) => index !== action.payload),
      };
    case "SET_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
}
export default addToCartReducer;
