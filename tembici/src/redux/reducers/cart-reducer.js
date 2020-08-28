import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_PRODUCT_QTY } from "../cart-action";

let initialState = {
    cart: []
}

export default function cartReducer(state = initialState, action) {
    let newCart = [...state.cart];
    let foundItem = newCart.find(i => i.productID === action.value.product.productID);

    switch (action.type) {
        case ADD_TO_CART:            
            if (foundItem) {
                newCart[newCart.indexOf(foundItem)] = { ...foundItem, qty: foundItem.qty + 1 }
            } else {
                newCart.push({ ...action.value.product, qty: 1 })
            }
            return { ...state, cart: newCart }

        case REMOVE_FROM_CART:
            if (foundItem) {
                newCart.splice(newCart.indexOf(foundItem), 1)
            }
            return { ...state, cart: newCart }

        case CHANGE_PRODUCT_QTY:            
            if (foundItem) {
                newCart[newCart.indexOf(foundItem)] = {...foundItem, qty: action.value.qty}
            }
            return {...state, cart: newCart}
        default:
            return { ...state }
    }
}