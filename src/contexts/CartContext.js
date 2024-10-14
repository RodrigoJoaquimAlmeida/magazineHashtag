import { createContext } from 'react';

export const CartContext = createContext(null);

export const getAmountOfItemsInCart = (cartItemObj) => {
	let amount = 0;
	for (const productID in cartItemObj) {
		amount += cartItemObj[productID];
	}
	return amount;
};
