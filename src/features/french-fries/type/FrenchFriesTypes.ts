export interface FrenchFries {
	name: string;
	description: string;
	image: string;
	sizes: FrenchFriesSizes[];
	productInfo?: ProductInfo;
}

export interface FrenchFriesSizes {
	label: string;
	size: string;
	price: number;
}

export interface ProductInfo {
	allergens?: string[];
	substances?: string[];
	disclaimer?: string;
	additionalInfo?: string;
}
