import React, { Component } from 'react';
import { getProducts } from '../../services/products';
import ProductCard from '../../components/product-card';
import { addToCart } from '../../redux/cart-action';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import './index.css';
import '../../util.css';
import ProductCardList from '../../components/product-card-list';

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    addToCart: (product) => dispatch(addToCart(product))
})

const DISPLAY_LIST = "DISPLAY_LIST";
const DISPLAY_GRID = "DISPLAY_GRID";

class HomeProducts extends Component {

    constructor(props) {
        super();
        this.state = {
            products: null,
            filteredProducts: null,
            productsToRender: [],
            search: "",
            displayType: DISPLAY_GRID
        };
    }

    compare(a, b) {
        const priceA = a.unitPrice;
        const priceB = b.unitPrice;

        let comparison = 0;
        if (priceA > priceB) {
            comparison = 1;
        } else if (priceA < priceB) {
            comparison = -1;
        }
        return comparison;
    }

    componentDidUpdate(prevProps) {
        const {
            products
        } = this.state

        if (prevProps.topFive !== this.props.topFive) {

            getProducts().then((products) => {

                if (this.props.topFive) {
                    let topFiveProducts = products.sort(this.compare).slice(0, 5);
                    this.setState({ products: topFiveProducts, filteredProducts: topFiveProducts, productsToRender: [] });
                } else {
                    this.setState({ products: products, filteredProducts: products, productsToRender: [] });
                }
                this.fillProductsToRender()
            })
        }
    }

    componentDidMount() {
        getProducts().then((products) => {
            if (this.props.topFive) {
                let sortedProducts = products.sort(this.compare);
                let topFiveProducts = sortedProducts.slice(0, 5);
                this.setState({ products: topFiveProducts, filteredProducts: topFiveProducts });
            } else {
                this.setState({ products: products, filteredProducts: products });
            }
            this.fillProductsToRender()
        })
    }

    onAddToCartClick = (product) => {
        this.props.addToCart(product);
    }

    onSearchChange = (event) => {
        this.setState({ search: event.target.value })
    }

    fillProductsToRender = () => {
        let count = 0;
        let filteredProducts = this.state.filteredProducts;
        let productsToRender = this.state.productsToRender;

        for (let i = 0; i < filteredProducts.length; i++) {
            count++;
            if (count === 9) {
                break;
            }
            productsToRender.push(filteredProducts.shift())
        }
        this.setState({ productsToRender: productsToRender, filteredProducts: filteredProducts })
    }

    onSearchClick = () => {
        const valueToSearch = this.state.search;
        let newProductsList = this.state.products.filter((product) => {
            return product.name.includes(valueToSearch) || product.description.includes(valueToSearch);
        });
        this.setState({ filteredProducts: newProductsList });
    }

    onDisplayTypeClick = (type) => {
        this.setState({displayType: type})
    }

    render() {
        const {
            filteredProducts,
            productsToRender,
            search,
            displayType
        } = this.state;

        return (
            <div>
                <div className="row sub-menu-bar">
                    <div className="col left form-inline">
                        <input value={search} className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.onSearchChange} />
                        <button className="btn btn-dark my-2 my-sm-0" type="submit" onClick={this.onSearchClick}>Search</button>
                    </div>
                    <div className="col right">
                        <div className="btn-group" role="dispalyType">
                            <button type="button" className="btn btn-secondary" onClick={() => this.onDisplayTypeClick(DISPLAY_GRID)}>Grid</button>
                            <button type="button" className="btn btn-secondary" onClick={() => this.onDisplayTypeClick(DISPLAY_LIST)}>List</button>
                        </div>
                    </div>
                </div>

                {productsToRender.length > 0 &&
                    <div className="center">
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={() => { this.fillProductsToRender() }}
                            hasMore={filteredProducts.length > 0}
                            loader={<div className="center">
                                <div className="loader"></div>
                            </div>}>
                            {productsToRender.map((product) => (
                                (displayType === DISPLAY_GRID ?
                                    <ProductCard key={product.productID} product={product} onAddToCartClick={this.onAddToCartClick} />
                                    :
                                    <ProductCardList product={product} onAddToCartClick={this.onAddToCartClick} />)
                            ))}
                        </InfiniteScroll>

                    </div>
                }
                {!productsToRender.length > 0 &&
                    <div className="center">
                        <div className="loader"></div>
                    </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeProducts);

