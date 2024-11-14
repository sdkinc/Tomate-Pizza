import { ExtraIngredientCalzone } from '../../calzone/type/CalzoneTypes';
import { Ingredients } from '../../pasta-items/type/PastaTypes';
import { ExtraIngredient } from '../../pizza-items/type/PizzaTypes';

export type ProductType = 'pizza' | 'pasta' | 'calzone' | 'starters' | 'breadsticks' | 'meatDishes';

export interface CartItem {
	id: string;
	type: ProductType;
	name: string;
	image: string;
	price: number;
	quantity: number;
	size?: string;
	extras?: ExtraIngredient[]; // Допы для пиццы
	extrasCalzone?: ExtraIngredientCalzone[]; // Допы для Calzone
	freeIngredients?: Omit<ExtraIngredient, 'priceBySize'>[]; // Бесплатные ингредиенты для WunschPizza
	ingredients?: Ingredients[];
}
