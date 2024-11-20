import { ExtraIngredientCalzone } from '../../calzone/type/CalzoneTypes';
import { FrenchFriesSizes, SauceOption } from '../../french-fries/type/FrenchFriesTypes';
import { Ingredients } from '../../pasta-items/type/PastaTypes';
import { ExtraIngredient } from '../../pizza-items/type/PizzaTypes';

export type ProductType =
	| 'pizza'
	| 'pasta'
	| 'calzone'
	| 'starters'
	| 'breadsticks'
	| 'meatDishes'
	| 'burgers'
	| 'frenchFries'
	| 'americana'
	| 'desserts'
	| 'iceCream'
	| 'nonAlcoholicDrinks'
	| 'alcoholicDrinks';

export interface CartItem {
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
	sizes?: FrenchFriesSizes[];
	selectedSauces?: SauceOption[];
}
