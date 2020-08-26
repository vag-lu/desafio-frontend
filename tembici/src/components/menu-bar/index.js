import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class MenuBar extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="collapse navbar-collapse container" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#"> Top 5 <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faShoppingCart}/></button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default MenuBar