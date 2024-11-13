import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtraIngredient } from '../pizza-items/type/PizzaTypes';
import { ExtraIngredientCalzone } from '../calzone/type/CalzoneTypes';
import { Ingredients } from '../pasta-items/type/PastaTypes';
import { SaladsIngredients } from '../salads/type/SaladsType';

export type ProductType = 'pizza' | 'pasta' | 'calzone' | 'wunschpizza' | 'starters' | 'salads';

interface CartItem {
	id: string;
	type: ProductType;
	name: string;
	image: string;
	price: number;
	quantity: number;
	size?: string;
	extras?: ExtraIngredient[];
	extrasCalzone?: ExtraIngredientCalzone[];
	freeIngredients?: Omit<ExtraIngredient, 'priceBySize'>[];
	ingredients?: Ingredients[];
	saladsIngredients?: SaladsIngredients[];
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

			const uniqueId =
				type === 'wunschpizza' && freeIngredients
					? `${id}-${size}-${freeIngredients.map((ingredient) => ingredient.label).join(',')}`
					: id + (size ? `-${size}` : '');

			const existingItem = state.items.find((item) => item.id === uniqueId && item.size === size);

			if (existingItem) {
				existingItem.quantity += action.payload.quantity;
				existingItem.price += action.payload.price;
			} else {
				state.items.push({
					...action.payload,
					id: uniqueId,
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
