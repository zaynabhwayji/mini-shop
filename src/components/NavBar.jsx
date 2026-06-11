// Navbar displays the number of items in the cart (e.g. 'Cart (3)').
import { useCart } from "../context/CartContext";
function NavBar() {
    const { totalItems } = useCart();
    return (    
        <nav className="navbar">
            <h1>MiniShop</h1>
            <div className="cart-info">
                <span>Cart ({totalItems})</span>
            </div>
        </nav>
    );
}
export default NavBar;