import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtraIngredient } from '../pizza-items/type/PizzaTypes';
import { Ingredients } from '../pasta-items/type/PastaTypes';

interface CartItem {
	id: string;
	name: string;
	image: string;
	price: number;
	quantity: number;
	extras?: ExtraIngredient[]; // Paid extras
	freeIngredients?: Omit<ExtraIngredient, 'priceBySize'>[]; // Free ingredients for wunschPizza
	ingredients?: Ingredients[];
	size?: string;
	type: string;
}

interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			const { id, size, freeIngredients, type } = action.payload;

			// Unique identifier for cart items based on id, size, and free ingredients for wunschPizza
			const uniqueId =
				type === 'wunschpizza' && freeIngredients
					? `${id}-${size}-${freeIngredients.map((ingredient) => ingredient.label).join(',')}`
					: id;

			const existingItem = state.items.find((item) => item.id === uniqueId && item.size === size);

			if (existingItem) {
				existingItem.quantity += action.payload.quantity;
				existingItem.price += action.payload.price; // Update total price for the item
			} else {
				state.items.push({
					...action.payload,
					id: uniqueId, // Set unique ID for wunschPizza items with free ingredients
				});
			}
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
