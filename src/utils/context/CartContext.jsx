import { createContext, useContext, useState } from "react";


const CartContext = createContext();


const CartContextProvider = ({children}) => {
    // Load cart from localStorage on initial render with safety check
    const [cart, setCart] = useState(() => {
        try {
            const stored = localStorage.getItem("cartItems");
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.warn("Failed to load cart from localStorage:", error);
            return [];
        }
    });

    return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>;
};

export default CartContextProvider;




export const useCartContext = () => useContext(CartContext);