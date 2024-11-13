export interface Salads {
	name: string;
	description: string;
	image: string;
	price: number;
	saladsIngredients?: SaladsIngredients[];
	productInfo?: ProductInfo;
}
export interface SaladsIngredients {
	label: string;
}
export interface ProductInfo {
	allergens?: string[];
	substances?: string[];
	disclaimer?: string;
	additionalInfo?: string;
}
