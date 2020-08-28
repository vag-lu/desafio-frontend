import React, { Component } from 'react'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'

class ProductCard extends Component {

    render() {
        const {
            product,
            onAddToCartClick
        } = this.props
        return (
            <div className="product-card">
                <div className="row">
                    <div className="col">
                        <img src={product.image}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col left">
                        {product.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col left">
                        {product.description}
                    </div>
                </div>
                <div className="row">
                    <div className="col left">
                        <h4>${product.unitPrice.toFixed(2)}</h4>
                    </div>
                    <div className="col right">
                        {product.unitsInStock > 0 ?
                            <button className="btn btn-dark " onClick={() => onAddToCartClick(product)}><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                            :
                            <div className="out-of-stock">Out of Stock</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;