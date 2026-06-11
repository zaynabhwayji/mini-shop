import { useContext, createContext, useState, useEffect, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    //add item to cart
    function addToCart(product) {
        setCartItems((prev) => {
            const existingItem = prev.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    }

    //remove item from cart
    function removeFromCart(productId) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    }
    //Add a clearCart() function and a 'Clear All' button.
    function clearCart() {
        setCartItems([]);
    }
    //total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    //number  of items in cart
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    //use memo 
    const value = useMemo(() => ({
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
        totalItems,
        clearCart,
    }), [cartItems, totalPrice]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
//custom hook to use cart context
export function useCart() {
    return useContext(CartContext);
}    
