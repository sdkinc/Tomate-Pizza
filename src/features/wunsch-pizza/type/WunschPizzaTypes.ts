export interface WunschPizza {
	name: string;
	description: string;
	image: string;
	sizes: PizzaSize[];
	extras?: ExtraIngredient[];
	freeIngredients?: FreeIngredient[];
	freeIngredientsLimit?: number;
	productInfo?: ProductInfo;
	selectedIngredients?: ExtraIngredient[];
}

export interface ProductInfo {
	allergens?: string[];
	substances?: string[];
	disclaimer?: string;
	additionalInfo?: string;
}

export interface PizzaSize {
	label: string;
	size: string;
	price: number;
}

export interface ExtraIngredient {
	label: string;
	priceBySize: {
		Klein: number;
		Mittel: number;
		Familie: number;
	};
}

export interface FreeIngredient {
	label: string;
}
