import React, { Component } from 'react'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'

class ProductCard extends Component {

    render() {
        const {
            product
        } = this.props
        return (
            <div className="product-card">
                <div className="row">
                    <div className="col">
                        <img src={product.image}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {product.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {product.description}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button><FontAwesomeIcon icon={faCartPlus}/> Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;