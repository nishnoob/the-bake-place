import { useContext, useState } from "react";
import { CartContext } from "../../utils/cartContext";
import "./checkout.css";
import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const {cart, addToCart, removeFromCart, total, emptyCart} = useContext(CartContext);
    const [showConfetti, setShowConfetti] = useState(false);
    const navigate = useNavigate();

    const handleCheckout = () => {
        setShowConfetti(true);
        emptyCart();
        console.log('Cart items on checkout', cart);
      };

    const handleConfettiComplete = () => {
        setShowConfetti(false);
    }

    const handleNavigate = () => navigate(-1);

    return (
        <div className="checkout-pane">
            {cart.length > 0 ? (
                <>
                    {cart.map((product, index) => (
                        <div key={product.id} className={`checkout-item ${index === (cart.length - 1) && 'last'}`}>
                            <div className="left">
                                <img src={product.image} alt={product.title} width={50} />
                                <div className="item-title">{product.title}</div>
                            </div>
                            <div className="spacer"></div>
                            <div className="mob-right">
                                <div className="quantity">
                                    <button className='remove' onClick={() => removeFromCart(product)}>−</button>
                                    <span>{product.quantity}</span>
                                    <button className='add-more' onClick={() => addToCart(product)}>+</button>
                                </div>
                                <div className="price">
                                ₹{product.price * product.quantity}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="checkout-item total">
                        <div className="quantity">
                            Total
                        </div>
                        <div className="price">
                        ₹{total.toFixed(2)}
                        </div>
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                </>
            ) : (
                <div className="empty-cart">
                    <div>Your cart seems to be empty!</div>
                    <div>Why not add something from our freshly baked items.</div>
                    <button className="checkout-btn" onClick={handleNavigate}>See baked items</button>
                </div>
            )}
            {showConfetti && <ReactConfetti recycle={false} onConfettiComplete={handleConfettiComplete} />}
        </div>
    );
}

export default Checkout;