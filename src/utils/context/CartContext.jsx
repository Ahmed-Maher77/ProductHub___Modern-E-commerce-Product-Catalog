import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	// Load cart from localStorage on initial render
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem("cartItems")) || []
	);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;

export const useCartContext = () => useContext(CartContext);
