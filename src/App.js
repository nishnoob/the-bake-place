import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductListing from './components/Listing';
import { CartContext, CartProvider } from './utils/cartContext';
import { useContext } from 'react';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

const Header = () => {
  const {cart} = useContext(CartContext);

  return (
    <header>
      <h1>The Bake Place</h1>
        <Link to="/checkout" className='checkout-link'>
          <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" width={25} />
          {cart.length > 0 && <div className='cart-notification' />}
        </Link>
    </header>
  );
};
