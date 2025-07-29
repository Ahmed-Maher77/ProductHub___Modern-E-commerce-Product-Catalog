import { toast } from "react-toastify";
import { useCartContext } from "../context/CartContext";

const useHandleAddToCart = () => {
	const { cart, setCart } = useCartContext();

	// Add product to cart with duplicate check
	const addToCart = ({
		title,
		price,
		description,
		category,
		image,
		rating,
	}) => {
		const newProduct = {
			title,
			price,
			description,
			category,
			image,
			rating,
		};

		// Check if product already exists in cart
		const isProductAlreadyInCart = cart.find(
			(product) => product.title === title
		);

		if (isProductAlreadyInCart) {
			toast.error("Product already in cart");
		} else {
			// Add to cart and persist to localStorage
			setCart((prev) => {
				const newCart = [...prev, newProduct];
				localStorage.setItem("cartItems", JSON.stringify(newCart));
				console.log(newCart);
				return newCart;
			});
			toast.success("Product added to cart successfully");
		}
	};

	return { addToCart };
};

export default useHandleAddToCart;
