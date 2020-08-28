import React, { Component } from 'react';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'

class ProductCardList extends Component {

    render() {
        const {
            product,
            onAddToCartClick
        } = this.props
        return (
            <div className="row product-card-list">
                <div className="col-3 my-auto">
                    <img src={product.image}></img>
                </div>
                <div className="col-4 my-auto left">
                    <div className="row"><div className="col">{product.name}</div></div>
                    <div className="row"><div className="col">Items left in stock: {product.unitsInStock}</div></div>
                </div>
                <div className="col-2 my-auto">
                    <h4>${product.unitPrice.toFixed(2)}</h4>
                </div>
                <div className="col-3 my-auto">
                    {product.unitsInStock > 0 ?
                        <button className="btn btn-dark " onClick={() => onAddToCartClick(product)}><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                        :
                        <div className="out-of-stock">Out of Stock</div>
                    }
                </div>
            </div>
        )
    }
}

export default ProductCardList