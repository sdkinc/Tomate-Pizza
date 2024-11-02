import { ExtraIngredient } from '../../pizza-items/type/PizzaTypes';

export type ProductType = 'pizza' | 'pasta' | 'other';

export interface CartItem {
	id: string;
	type: ProductType;
	name: string;
	quantity: number;
	size?: string; // строка для размера (напр., "маленькая")
	extras?: ExtraIngredient[]; // массив ингредиентов
	price: number;
}
