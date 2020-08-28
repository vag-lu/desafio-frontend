export const ADD_TO_CART = "add-to-cart";
export const REMOVE_FROM_CART = "remove-from-cart";
export const CHANGE_PRODUCT_QTY = "change-product-qty";

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        value: { product: product }
    }
}

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        value: { product: product }
    }
}

export function changeProductQty(product, qty) {
    return {
        type: CHANGE_PRODUCT_QTY,
        value: {
            qty: qty,
            product: product
        }
    }
}