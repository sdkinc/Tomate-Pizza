export interface Pizza {
	name: string;
	description: string;
	image: string;
	sizes: PizzaSize[];
	extras?: ExtraIngredient[];
	productInfo?: ProductInfo;
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
