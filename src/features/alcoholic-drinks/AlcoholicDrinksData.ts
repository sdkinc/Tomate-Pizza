import { AlcoholicDrinks } from './type/AlcoholicDrinksTypes';

const alcoholicDrinks: AlcoholicDrinks[] = [
	{
		name: 'alcoholicDrinks.augustinerPale.name',
		description: 'alcoholicDrinks.augustinerPale.description',
		image: 'augustinerPale.webp',
		price: 2.5,
		productInfo: {
			allergens: [
				'alcoholicDrinks.augustinerPale.productInfo.allergens.0',
				'alcoholicDrinks.augustinerPale.productInfo.allergens.1',
			],

			nutritionFacts: ['alcoholicDrinks.augustinerPale.productInfo.nutritionFacts.0'],
		},
	},
	{
		name: 'alcoholicDrinks.augustinerEdelstoff.name',
		description: 'alcoholicDrinks.augustinerEdelstoff.description',
		image: 'augustinerEdelstoff.webp',
		price: 2.5,
		productInfo: {
			allergens: [
				'alcoholicDrinks.augustinerEdelstoff.productInfo.allergens.0',
				'alcoholicDrinks.augustinerEdelstoff.productInfo.allergens.1',
			],

			nutritionFacts: ['alcoholicDrinks.augustinerEdelstoff.productInfo.nutritionFacts.0'],
		},
	},
	{
		name: 'alcoholicDrinks.franziskaner.name',
		description: 'alcoholicDrinks.franziskaner.description',
		image: 'franziskaner.webp',
		price: 2.5,
		productInfo: {
			allergens: [
				'alcoholicDrinks.franziskaner.productInfo.allergens.0',
				'alcoholicDrinks.franziskaner.productInfo.allergens.1',
				'alcoholicDrinks.franziskaner.productInfo.allergens.2',
			],

			nutritionFacts: ['alcoholicDrinks.franziskaner.productInfo.nutritionFacts.0'],
		},
	},
	{
		name: 'alcoholicDrinks.becks.name',
		description: 'alcoholicDrinks.becks.description',
		image: 'becks.webp',
		price: 2.0,
		productInfo: {
			allergens: [
				'alcoholicDrinks.becks.productInfo.allergens.0',
				'alcoholicDrinks.becks.productInfo.allergens.1',
			],

			nutritionFacts: ['alcoholicDrinks.becks.productInfo.nutritionFacts.0'],
		},
	},
	{
		name: 'alcoholicDrinks.merlot.name',
		description: 'alcoholicDrinks.merlot.description',
		image: 'merlot.webp',
		price: 9.0,
		productInfo: {
			allergens: ['alcoholicDrinks.merlot.productInfo.allergens.0'],
			nutritionFacts: ['alcoholicDrinks.merlot.productInfo.nutritionFacts.0'],
		},
	},
	{
		name: 'alcoholicDrinks.chardonnay.name',
		description: 'alcoholicDrinks.chardonnay.description',
		image: 'chardonnay.webp',
		price: 9.0,
		productInfo: {
			allergens: ['alcoholicDrinks.chardonnay.productInfo.allergens.0'],
			nutritionFacts: ['alcoholicDrinks.chardonnay.productInfo.nutritionFacts.0'],
		},
	},
	{
		name: 'alcoholicDrinks.prosecco.name',
		description: 'alcoholicDrinks.prosecco.description',
		image: 'prosecco.webp',
		price: 10.0,
		productInfo: {
			allergens: ['alcoholicDrinks.prosecco.productInfo.allergens.0'],
			nutritionFacts: ['alcoholicDrinks.prosecco.productInfo.nutritionFacts.0'],
		},
	},
];
export default alcoholicDrinks;
