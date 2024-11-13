import { Starters } from './type/StartersType';

const starters: Starters[] = [
	{
		name: 'starters.springRolls.name',
		image: 'springRolls.webp',
		price: 5.0,
		productInfo: {
			allergens: [
				'starters.springRolls.productInfo.allergens.0',
				'starters.springRolls.productInfo.allergens.1',
				'starters.springRolls.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'starters.dolmates.name',
		description: 'starters.dolmates.description',
		image: 'dolmates.webp',
		price: 5.0,
		productInfo: {
			allergens: ['starters.dolmates.productInfo.allergens.0'],
		},
	},
];
export default starters;
