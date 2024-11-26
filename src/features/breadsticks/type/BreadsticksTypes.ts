export interface Breadsticks {
	name: string;
	description: string;
	image: string;
	price: number;
	freeIngredients?: FreeIngredient[];
	freeIngredientsLimit?: number;
	productInfo?: ProductInfo;
}
export interface ProductInfo {
	allergens?: string[];
	substances?: string[];
	disclaimer?: string;
	additionalInfo?: string;
}
export interface FreeIngredient {
	label: string;
}
