export interface AlcoholicDrinks {
	name: string;
	description: string;
	image: string;
	price: number;
	productInfo?: ProductInfo;
}
export interface ProductInfo {
	allergens?: string[];
	nutritionFacts?: string[];
	disclaimer?: string;
	additionalInfo?: string;
}
