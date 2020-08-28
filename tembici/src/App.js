import React, { Component } from 'react';
import MenuBar from './components/menu-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeProducts from './pages/products-home';
import Cart from './pages/cart';
import { HOME_PAGE, CART_PAGE, TOP_FIVE } from './routes';

class App extends Component {
  render() {
    return (
        <Router>
          <MenuBar />
          <div className="container">
            <Switch>
              <Route exact path={HOME_PAGE}>
                <HomeProducts topFive={false}/>
              </Route>              
              <Route exact path={TOP_FIVE}>
                <HomeProducts topFive={true}/>
              </Route>
              <Route exact path={CART_PAGE}>
                <Cart />
              </Route>
            </Switch>
          </div >
        </Router>
    );
  }
}

export default App;