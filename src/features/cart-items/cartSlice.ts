import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtraIngredient } from '../pizza-items/type/PizzaTypes';
import { Ingredients } from '../pasta-items/type/PastaTypes';

interface CartItem {
	id: string;
	name: string;
	image: string;
	price: number;
	quantity: number;
	extras?: ExtraIngredient[];
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
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id && item.size === action.payload.size
			);

			if (existingItem) {
				existingItem.quantity += action.payload.quantity;
				existingItem.price += action.payload.price; // Пересчитываем общую цену для данного товара
			} else {
				state.items.push(action.payload);
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
