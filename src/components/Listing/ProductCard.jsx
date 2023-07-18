import { useContext } from 'react';
import { CartContext } from '../../utils/cartContext';

const ProductCard = ({ product }) => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const isInCart = cart.length > 0 ? cart.find(it => it.id === product.id) : false;

    return (
        <div className="product-item">
          <img src={product.image} alt={product.title} />
          <div className='product-title'>{product.title}</div>
          <div className="product-actions">
            {isInCart ? (
              <>
                <button className='remove' onClick={() => removeFromCart(product)}>−</button>
                <span>{isInCart.quantity}</span>
                <button className='add-more' onClick={() => addToCart(product)}>+</button>
              </>
            ) : (
              <button className='add-to-cart' onClick={() => addToCart(product)}>Add to cart</button>
            )}
          </div>
        </div>
    );
};

export default ProductCard;