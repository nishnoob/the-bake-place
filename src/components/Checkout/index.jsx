import { useContext, useState } from "react";
import { CartContext } from "../../utils/cartContext";
import "./checkout.css";
import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "./CheckoutItem";
import Addons from "./Addons";

const Checkout = () => {
    const {cart, total, emptyCart} = useContext(CartContext);
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
        <>
            <Addons />
            <div className="checkout-pane">
                {cart.length > 0 ? (
                    <>
                        {cart.map((product, index) => (
                            <CheckoutItem product={product} index={index} />
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
                        <div className="empty-emoji">¯\_(ツ)_/¯</div>
                        <div>Your cart seems to be empty!</div>
                        <div>Why not add something from our freshly baked items.</div>
                        <button className="checkout-btn" onClick={handleNavigate}>See baked items</button>
                    </div>
                )}
                {showConfetti && <ReactConfetti recycle={false} onConfettiComplete={handleConfettiComplete} />}
            </div>
        </>
    );
}

export default Checkout;