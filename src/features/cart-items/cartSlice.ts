import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtraIngredient } from '../pizza-items/type/PizzaTypes';
import { ExtraIngredientCalzone } from '../calzone/type/CalzoneTypes';
import { Ingredients } from '../pasta-items/type/PastaTypes';
import { SaladsIngredients } from '../salads/type/SaladsType';
import { FrenchFriesSizes, SauceOption } from '../french-fries/type/FrenchFriesTypes';

export type ProductType =
	| 'pizza'
	| 'pasta'
	| 'calzone'
	| 'wunschpizza'
	| 'starters'
	| 'salads'
	| 'breadsticks'
	| 'meatDishes'
	| 'burgers'
	| 'frenchFries'
	| 'americana'
	| 'desserts';

interface CartItem {
	id: string;
	type: ProductType;
	name: string;
	image: string;
	price: number; // Цена за единицу товара
	quantity: number;
	size?: string;
	extras?: ExtraIngredient[];
	extrasCalzone?: ExtraIngredientCalzone[];
	freeIngredients?: Omit<ExtraIngredient, 'priceBySize'>[];
	ingredients?: Ingredients[];
	saladsIngredients?: SaladsIngredients[];
	frenchFriesSize?: FrenchFriesSizes;
	sauces?: SauceOption[];
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
				existingItem.quantity += action.payload.quantity; // Увеличиваем количество
			} else {
				state.items.push({
					...action.payload,
					id: uniqueId, // Устанавливаем уникальный ID
				});
			}
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		clearCart: (state) => {
			state.items = [];
		},
		updateQuantity: (state, action: PayloadAction<{ id: string; change: number }>) => {
			const { id, change } = action.payload;
			const targetItem = state.items.find((entry) => entry.id === id); // Уникальное имя параметра

			if (targetItem && targetItem.quantity + change > 0) {
				targetItem.quantity += change; // Изменяем количество товара
			} else if (targetItem && targetItem.quantity + change <= 0) {
				// Если количество становится 0 или меньше, удаляем товар
				state.items = state.items.filter((entry) => entry.id !== id); // Уникальное имя параметра
			}
		},
	},
});

export const { addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
