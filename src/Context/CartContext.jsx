import { useState, createContext } from "react";

export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);

	function totalCartValue() {
		let total = 0;
		cart.forEach((el) => {
			total += el.price * el.quantity;
		});
		return total.toFixed(2);
	}

	const updateCart = (obj, quantity) => {
		let product = cart.filter((el) => el.id === obj.id);
		product = product[0];

		if (product) {
			product.quantity += quantity;
			const updated = cart.map((el) => (el.id === obj.id ? product : el));
			setCart(updated);
		} else setCart([...cart, { ...obj, quantity: quantity }]);
	};

	return (
		<CartContext.Provider value={{ cart, updateCart, totalCartValue }}>
			{children}
		</CartContext.Provider>
	);
}
