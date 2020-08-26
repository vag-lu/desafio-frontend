import React, { Component } from 'react';
import MenuBar from './components/menu-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeProducts from './pages/products-home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './redux/cart-reducer';

const store = createStore(cartReducer)

class App extends Component {
  render() {
    return (
      <div >
        <Provider store={store}>
          <Router>
            <MenuBar />
            <Switch>
              <Route path="/">
                <HomeProducts />
              </Route>
              <Route path="/top-5">
              </Route>
              <Route path="/cart">

              </Route>
            </Switch>
          </Router>
        </Provider>
      </div >
    );
  }
}

export default App;