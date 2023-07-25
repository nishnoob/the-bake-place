import { useContext } from "react";
import { CartContext } from "../../utils/cartContext";

const CheckoutItem = ({ product, index }) => {
    const {cart, addToCart, removeFromCart} = useContext(CartContext);

    return (
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
    );
};

export default CheckoutItem;