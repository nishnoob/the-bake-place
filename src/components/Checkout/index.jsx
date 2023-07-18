import { useContext } from "react";
import { CartContext } from "../../utils/cartContext";
import "./checkout.css";

const Checkout = () => {
    const {cart, addToCart, removeFromCart, total} = useContext(CartContext);
    
    return (
        <div className="checkout-pane">
            {cart.length > 0 && (
                <>
                    {cart.map((product, index) => (
                        <div className={`checkout-item ${index === (cart.length - 1) && 'last'}`}>
                            <div className="left">
                                <img src={product.image} alt={product.title} width={50} />
                                <div className="item-title">{product.title}</div>
                            </div>
                            <div className="spacer"></div>
                            <div className="quantity">
                                <button className='remove' onClick={() => removeFromCart(product)}>−</button>
                                <span>{product.quantity}</span>
                                <button className='add-more' onClick={() => addToCart(product)}>+</button>
                            </div>
                            <div className="price">
                                {product.price * product.quantity}
                            </div>
                        </div>
                    ))}
                    <div className="checkout-item total">
                        <div className="quantity">
                            Total
                        </div>
                        <div className="price">
                            {total.toFixed(2)}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Checkout;