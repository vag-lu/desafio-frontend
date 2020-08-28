import React, { Component } from 'react'
import { addToCart, removeFromCart, changeProductQty } from '../../redux/cart-action'
import { connect } from 'react-redux'
import CartProduct from '../../components/cart-product'

const mapStateToProps = store => ({
    cart: store.cartState.cart
})
const mapDispatchToProps = dispatch => ({
    changeProductQty: (product, qty) => dispatch(changeProductQty(product, qty)),
    removeFromCart: (product) => dispatch(removeFromCart(product))
})

class Cart extends Component {

    constructor(props) {
        super(props);
    }

    onQtyChange = (event, product) => {
        this.props.changeProductQty(product, event.target.value)
    }

    onProductRemove = (product) => {
        this.props.removeFromCart(product)
    }

    totalPriceCalc = () => {
        let totalPrice = 0;
        const {
            cart
        } = this.props;
        if (cart) {
            cart.map(
                (prod) => {
                    totalPrice += prod.qty * prod.unitPrice
                }
            );
        }
        return totalPrice;
    }

    render() {
        const {
            cart
        } = this.props;
        return (
            <div>
                <h1>Your Cart</h1>
                <div className="row">
                    <div className="col-2">
                    </div>
                    <div className="col-4">
                        Product Name
                    </div>
                    <div className="col-3">
                        Price
                    </div>
                    <div className="col-1">
                        Q-ty
                    </div>
                    <div className="col-2">
                    </div>
                </div>
                {cart && cart.map((product) => (<CartProduct key={product.productID} product={product} onQtyChange={this.onQtyChange} onProductRemove={this.onProductRemove} />))}
                <hr />
                <div className="total-price right"><h2>Total Price: $ {this.totalPriceCalc().toFixed(2)}</h2></div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);