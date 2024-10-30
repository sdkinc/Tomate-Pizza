export interface Pizza {
	name: string;
	description: string;
	image: string;
	sizes: PizzaSize[];
	extras: ExtraIngredient[];
}

export interface PizzaSize {
	label: string;
	size: string;
	price: number;
}

export interface ExtraIngredient {
	label: string;
	price: number;
}
