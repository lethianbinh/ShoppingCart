import React, {Component} from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <div>
        <Header/>
        <main id="mainContainer">
            <div className="container">
              <Routes>
                <Route path='/product' element={<ProductsContainer/>}></Route>
                <Route path='/cart' element={<CartContainer/>}></Route>
              </Routes>
            </div>
          {/* <CartContainer></CartContainer> */}
        </main>
    </div>
    );
  }
}

export default App;
