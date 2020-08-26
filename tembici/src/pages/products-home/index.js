import React, { Component } from 'react';
import { getProducts } from '../../services/products';
import '../../util.css'
import ProductCard from '../../components/product-card';
import { addToCart } from '../../redux/cart-action';
import {connect} from 'react-redux'

const mapStateToProps =  state => ({})
const mapDispatchToProps = dispatch => ({
    addToCart: (product) => dispatch(addToCart(product))
})

class HomeProducts extends Component {

    constructor(props) {
        super();
        this.state = {
            products: null
        };

    }

    componentDidMount() {
        getProducts().then((products) => {
            this.setState({ products: products })
        })
    }

    render() {
        const {
            products
        } = this.state;
        
        return (
            <div>
                {products &&
                    products.map((product) => (
                        <ProductCard product={product} />
                    ))
                }

                {!products &&
                    <div className="center">
                        <div className="loader"></div>
                    </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HomeProducts);

