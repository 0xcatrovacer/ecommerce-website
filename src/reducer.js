export const initialState = {
    cart: [],
};

const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex((cartItem) => cartItem.title === action.title
            );
            let newCart = [...state.cart];

            if( index >= 0 ) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    'Cant remove product'
                )
            }
            return {
                ...state,
                cart: newCart
            };

        default:
            return state;
    }
};

export default reducer;