import { FrenchFries } from './type/FrenchFriesTypes';

const frenchFries: FrenchFries[] = [
	{
		name: 'frenchFries.frenchFries.name',
		description: 'frenchFries.frenchFries.description',
		image: 'frenchFries_image.webp',
		sizes: [
			{ label: 'Small', size: 'Small', price: 4.0 },
			{ label: 'Large', size: 'Large', price: 5.0 },
		],
		productInfo: {
			allergens: [
				'frenchFries.frenchFries.productInfo.allergens.0',
				'frenchFries.frenchFries.productInfo.allergens.1',
			],
			substances: [
				'frenchFries.frenchFries.productInfo.substances.0',
				'frenchFries.frenchFries.productInfo.substances.1',
			],
		},
	},
];

export default frenchFries;
