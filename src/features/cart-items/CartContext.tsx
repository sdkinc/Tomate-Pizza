import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from './type/CartTypes';

interface CartContextProps {
	items: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string) => void;
	clearCart: () => void;
}

interface CartProviderProps {
	children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [items, setItems] = useState<CartItem[]>([]);

	const addToCart = (item: CartItem): void => {
		setItems((prevItems) => {
			const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);

			if (existingItemIndex >= 0) {
				const updatedItems = [...prevItems];
				updatedItems[existingItemIndex].quantity += item.quantity;
				return updatedItems;
			} else {
				return [...prevItems, item];
			}
		});
	};

	const removeFromCart = (id: string): void => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const clearCart = (): void => {
		setItems([]);
	};

	return (
		<CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = (): CartContextProps => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};
