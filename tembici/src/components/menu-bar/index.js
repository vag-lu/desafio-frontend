import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CART_PAGE, HOME_PAGE, TOP_FIVE } from '../../routes'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import "./index.css"

const mapStateToProps = store => ({
    cart: store.cartState.cart
})
const mapDispatchToProps = dispatch => ({})

class MenuBar extends Component {
    constructor(props) {
        super(props);
    }    

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
                <div className="collapse navbar-collapse container" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item`}></li>
                        <li className={`nav-item`}>
                            <NavLink  activeClassName="active" className={`nav-link`} to={HOME_PAGE}>Home </NavLink>
                        </li>
                        <li className={`nav-item`}>
                            <NavLink  activeClassName="active" className="nav-link" to={TOP_FIVE}> Top 5 </NavLink>
                        </li>
                    </ul>
                    <div>
                        <NavLink className="cart-link" to={CART_PAGE} ><FontAwesomeIcon icon={faShoppingCart} /><div className="cart-qty">{this.props.cart.length}</div> </NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)