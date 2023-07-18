import { BrowserRouter, Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  return (
    <header>
      {!isHomePage && (
        <button onClick={() => navigate(-1)} className='back-btn'>
          <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" width={25} />
        </button>
      )}
      <h1>The Bake Place</h1>
      <Link to="/checkout" className='checkout-link'>
        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" width={25} />
        {cart.length > 0 && <div className='cart-notification' />}
      </Link>
    </header>
  );
};
