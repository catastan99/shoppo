const initialState = {
  products: [],
};
export function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      const findProduct = state.products.find(
        (product) => product.id === action.payload.product.id
      );

      if (!findProduct)
        return Object.assign({}, state, {
          products: [
            ...state.products,
            {
              ...action.payload.product,
            },
          ],
        });
      else return state;

    case "REMOVE_FROM_FAVORITE":
      const filteredProducts = state.products.filter((product) => {
        return product.id !== action.payload.id;
      });
      return Object.assign({}, state, {
        products: filteredProducts,
      });

    default:
      return state;
  }
}
