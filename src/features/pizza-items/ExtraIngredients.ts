import { ExtraIngredient } from './type/PizzaTypes';

const extraIngredients: ExtraIngredient[] = [
	{
		label: 'Cheese',
		priceBySize: {
			Klein: 1.5,
			Mittel: 0.7,
			Familie: 1.0,
		},
	},
	{
		label: 'Knoblauch',
		priceBySize: {
			Klein: 0.3,
			Mittel: 0.5,
			Familie: 0.7,
		},
	},
	{
		label: 'Ananas',
		priceBySize: {
			Klein: 0.4,
			Mittel: 0.6,
			Familie: 0.8,
		},
	},
	{
		label: 'Artischocken',
		priceBySize: {
			Klein: 0.4,
			Mittel: 0.6,
			Familie: 0.8,
		},
	},
	{
		label: 'BBQ-Sauce',
		priceBySize: {
			Klein: 0.4,
			Mittel: 0.6,
			Familie: 0.8,
		},
	},
];
export default extraIngredients;
