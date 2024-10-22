import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/HomePage/Home';
import Checkout from './pages/CheckouPage/Checkout';
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory';
import { Routes, Route } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';

function App() {
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
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/history' element={<PurchaseHistory />} />
			</Routes>
		</CartContext.Provider>
	);
}

export default App;
