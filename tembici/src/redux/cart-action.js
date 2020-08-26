export const ADD_TO_CART = "add-to-cart"

export function addToCart(product){
    return {
        type: ADD_TO_CART,
        value: product
    }
}