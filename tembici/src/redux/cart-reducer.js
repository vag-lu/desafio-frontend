import { ADD_TO_CART } from "./cart-action";

const initialState = {
    cart: []
}

export default function cartReducer (state = initialState, action){
    switch (action.type) {
        case ADD_TO_CART: 
            const cart = state.cart;
            cart.push(action.value)
            return {...state, cart: cart}
    }
}