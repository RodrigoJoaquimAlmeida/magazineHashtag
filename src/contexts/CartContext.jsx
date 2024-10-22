import { useState, createContext, useContext } from 'react';

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const getAmountOfItemsInCart = (cartItemObj) => {
	let amount = 0;
	for (const productID in cartItemObj) {
		amount += cartItemObj[productID];
	}
	return amount;
};

const CartContextProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItem] = useState({});

	const toggleIsCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};

	const removeFromCart = (productId) => {
		const cartItemsCopy = { ...cartItems };
		delete cartItemsCopy[productId];
		setCartItem(cartItemsCopy);
	};

	const addToCart = (productId) => {
		setCartItem({
			...cartItems,
			[productId]: (cartItems[productId] ?? 0) + 1,
		});
	};

	const decreaseUnit = (productId) => {
		if (cartItems[productId] > 1) {
			setCartItem({
				...cartItems,
				[productId]: cartItems[productId] - 1,
			});
		} else {
			removeFromCart(productId);
		}
	};

	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				toggleIsCartOpen,
				cartItems,
				addToCart,
				decreaseUnit,
				removeFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
