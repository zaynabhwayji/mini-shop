import './App.css'
import ProductList from './components/ProductList';
import { PRODUCTS } from './lib/data';
import NavBar from './components/NavBar';
import CartSummary from './components/CartSummary';
import { useCart } from './context/CartContext';
import { useTheme } from './context/ThemeContext';
import ThemeButton from './components/ThemeButton';
function App() {
  const { cartItems, totalPrice, totalItems, clearCart } = useCart();

  return (
    <div className="App">
      <NavBar />
      <main>
        <p>Welcome to MiniShop! We have {PRODUCTS.length} products available.</p>
        <ProductList products={PRODUCTS} />
        <CartSummary />
      </main>
      <ThemeButton/>
    </div>
  )
}
export default App
