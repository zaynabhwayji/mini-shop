//CartSummary lists items with a 'Remove' button each, and shows the total price.
import { useCart } from "../context/CartContext";
function CartSummary() {
    const { cartItems, removeFromCart, totalPrice, clearCart } = useCart();
    return (    
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <span>{item.name} - ${item.price} x {item.quantity}</span>
                            <button onClick={() => removeFromCart(item.id)}>❌</button>
                        </li>
                    ))}
                </ul>
            )}
            <p><strong>Total Price: ${totalPrice.toFixed(2)}</strong></p>
            <button className="clear-btn" onClick={() => clearCart()}>Clear All</button>
        </div>
    );
}
export default CartSummary;