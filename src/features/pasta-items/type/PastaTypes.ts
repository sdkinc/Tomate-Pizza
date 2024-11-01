export interface Pasta {
	name: string;
	description: string;
	image: string;
	price: number;
	ingredients: Ingredients[];
	productInfo?: ProductInfo;
}
export interface Ingredients {
	label: string;
}
export interface ProductInfo {
	allergens?: string[];
	substances?: string[];
	disclaimer?: string;
	additionalInfo?: string;
}
