export interface Burgers {
	name: string;
	description: string;
	image: string;
	price: number;
	productInfo?: ProductInfo;
}
export interface ProductInfo {
	allergens?: string[];
	substances?: string[];
	disclaimer?: string;
	additionalInfo?: string;
}
