import { MeatDishes } from './type/MeatDishesTypes';

const meatDishes: MeatDishes[] = [
	{
		name: 'meatDishes.schnitzel.name',
		description: 'meatDishes.schnitzel.description',
		image: 'schnitzel.webp',
		price: 11.9,
		productInfo: {
			allergens: [
				'meatDishes.schnitzel.productInfo.allergens.0',
				'meatDishes.schnitzel.productInfo.allergens.1',
				'meatDishes.schnitzel.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'meatDishes.turkeySchnitzel.name',
		description: 'meatDishes.turkeySchnitzel.description',
		image: 'turkeySchnitzel.webp',
		price: 11.9,
		productInfo: {
			allergens: [
				'meatDishes.turkeySchnitzel.productInfo.allergens.0',
				'meatDishes.turkeySchnitzel.productInfo.allergens.1',
				'meatDishes.turkeySchnitzel.productInfo.allergens.2',
			],
		},
	},
];
export default meatDishes;
