export interface Calzone {
	name: string;
	description: string;
	image: string;
	sizes: CalzoneSize[];
	extrasCalzone?: ExtraIngredientCalzone[];
	productInfo?: ProductInfo;
}
export interface ProductInfo {
	allergens?: string[];
	substances?: string[];
	disclaimer?: string;
	additionalInfo?: string;
}

export interface CalzoneSize {
	label: string;
	size: string;
	price: number;
}

export interface ExtraIngredientCalzone {
	label: string;
	priceBySize: {
		Klein: number;
		Mittel: number;
	};
}
