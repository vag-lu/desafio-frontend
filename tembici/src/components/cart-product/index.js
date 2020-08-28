import React, { Component } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./index.css"

class CartProduct extends Component {
    render() {
        const {
            product,
            onQtyChange,
            onProductRemove
        } = this.props;
        return (
            <div className="row cart-product center">
                <div className="col-2 my-auto">
                    <img src={product.image}></img>
                </div>
                <div className="col-4 my-auto left">
                    <div className="row"><div className="col">{product.name}</div></div>
                    <div className="row"><div className="col">Items left in stock: {product.unitsInStock}</div></div>
                </div>
                <div className="col-3 my-auto">
                    ${product.unitPrice.toFixed(2)}
                </div>
                <div className="col-1 my-auto ">
                    <div className="qty-form">
                        <input type="number" id="qty" step="1" min="1" 
                            max={`${product.unitsInStock}`} value={product.qty > product.unitsInStock ? product.unitsInStock : product.qty} 
                            onChange={(e)=> onQtyChange(e, product)} />
                    </div>
                </div>
                <div className="col-2 my-auto">
                    <button className="btn-delete" onClick={() => onProductRemove(product)}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
            </div>
        )
    }

}

export default CartProduct