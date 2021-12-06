import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import {CartProvider} from 'react-use-cart'
import Cart from './Cart';


function App() {
  return (
    <>
      <CartProvider>
        <Home/>
        <Cart/>
      </CartProvider>
    </>
  );
}

export default App;
