import { IceCream } from './type/IceCreamTypes';

const iceCream: IceCream[] = [
	{
		name: 'iceCream.iceCreamVanilla.name',
		description: 'iceCream.iceCreamVanilla.description',
		image: 'iceCreamVanilla.webp',
		price: 7.0,
		productInfo: {
			allergens: [
				'iceCream.iceCreamVanilla.productInfo.allergens.0',
				'iceCream.iceCreamVanilla.productInfo.allergens.1',
			],

			nutritionFacts: ['iceCream.iceCreamVanilla.productInfo.nutritionFacts.0'],
		},
	},
	{
		name: 'iceCream.iceCreamStrawberry.name',
		description: 'iceCream.iceCreamStrawberry.description',
		image: 'iceCreamStrawberry.webp',
		price: 7.0,
		productInfo: {
			allergens: [
				'iceCream.iceCreamStrawberry.productInfo.allergens.0',
				'iceCream.iceCreamStrawberry.productInfo.allergens.1',
			],

			nutritionFacts: ['iceCream.iceCreamStrawberry.productInfo.nutritionFacts.0'],
		},
	},
	{
		name: 'iceCream.iceCreamMacadamia.name',
		description: 'iceCream.iceCreamMacadamia.description',
		image: 'iceCreamMacadamia.webp',
		price: 7.0,
		productInfo: {
			allergens: [
				'iceCream.iceCreamMacadamia.productInfo.allergens.0',
				'iceCream.iceCreamMacadamia.productInfo.allergens.1',
				'iceCream.iceCreamMacadamia.productInfo.allergens.2',
				'iceCream.iceCreamMacadamia.productInfo.allergens.3',
			],

			nutritionFacts: ['iceCream.iceCreamMacadamia.productInfo.nutritionFacts.0'],
		},
	},
	{
		name: 'iceCream.iceCreamCookies.name',
		description: 'iceCream.iceCreamCookies.description',
		image: 'iceCreamCookies.webp',
		price: 7.0,
		productInfo: {
			allergens: [
				'iceCream.iceCreamCookies.productInfo.allergens.0',
				'iceCream.iceCreamCookies.productInfo.allergens.1',
				'iceCream.iceCreamCookies.productInfo.allergens.2',
				'iceCream.iceCreamCookies.productInfo.allergens.3',
			],

			nutritionFacts: ['iceCream.iceCreamCookies.productInfo.nutritionFacts.0'],
		},
	},
];
export default iceCream;
