export interface WunschPizza {
	name: string;
	description: string;
	image: string;
	sizes: PizzaSize[];
	extras?: ExtraIngredient[]; // Платные ингредиенты с ценами
	freeIngredients?: FreeIngredient[]; // Бесплатные ингредиенты без цен
	freeIngredientsLimit?: number; // Лимит на бесплатные ингредиенты
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

// Платные ингредиенты с ценами
export interface ExtraIngredient {
	label: string;
	priceBySize: {
		Klein: number;
		Mittel: number;
		Familie: number;
	}; // Убираем | undefined и используем значения по умолчанию
}

// Бесплатные ингредиенты без цен
export interface FreeIngredient {
	label: string;
}
