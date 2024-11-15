import { Burgers } from './type/BurgerTypes';

const burgers: Burgers[] = [
	{
		name: 'burgers.hamburger.name',
		description: 'burgers.hamburger.description',
		image: 'hamburger.webp',
		price: 7.5,
		productInfo: {
			allergens: [
				'burgers.hamburger.productInfo.allergens.0',
				'burgers.hamburger.productInfo.allergens.1',
				'burgers.hamburger.productInfo.allergens.2',
				'burgers.hamburger.productInfo.allergens.3',
				'burgers.hamburger.productInfo.allergens.4',
			],
		},
	},
	{
		name: 'burgers.doubleBurger.name',
		description: 'burgers.doubleBurger.description',
		image: 'doubleBurger.webp',
		price: 8.5,
		productInfo: {
			allergens: [
				'burgers.doubleBurger.productInfo.allergens.0',
				'burgers.doubleBurger.productInfo.allergens.1',
				'burgers.doubleBurger.productInfo.allergens.2',
				'burgers.doubleBurger.productInfo.allergens.3',
				'burgers.doubleBurger.productInfo.allergens.4',
			],
		},
	},
	{
		name: 'burgers.chickenBurger.name',
		description: 'burgers.chickenBurger.description',
		image: 'chickenBurger.webp',
		price: 7.5,
		productInfo: {
			allergens: [
				'burgers.chickenBurger.productInfo.allergens.0',
				'burgers.chickenBurger.productInfo.allergens.1',
				'burgers.chickenBurger.productInfo.allergens.2',
				'burgers.chickenBurger.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'burgers.baguetteSalami.name',
		description: 'burgers.baguetteSalami.description',
		image: 'baguetteSalami.webp',
		price: 9.0,
		productInfo: {
			allergens: [
				'burgers.baguetteSalami.productInfo.allergens.0',
				'burgers.baguetteSalami.productInfo.allergens.1',
				'burgers.baguetteSalami.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'burgers.baguetteHam.name',
		description: 'burgers.baguetteHam.description',
		image: 'baguetteHam.webp',
		price: 9.0,
		productInfo: {
			substances: [
				'burgers.baguetteHam.productInfo.substances.0',
				'burgers.baguetteHam.productInfo.substances.1',
			],
			allergens: [
				'burgers.baguetteHam.productInfo.allergens.0',
				'burgers.baguetteHam.productInfo.allergens.1',
				'burgers.baguetteHam.productInfo.allergens.2',
				'burgers.baguetteHam.productInfo.allergens.3',
				'burgers.baguetteHam.productInfo.allergens.4',
			],
		},
	},
	{
		name: 'burgers.baguetteMozzarella.name',
		description: 'burgers.baguetteMozzarella.description',
		image: 'baguetteMozzarella.webp',
		price: 9.0,
		productInfo: {
			allergens: [
				'burgers.baguetteMozzarella.productInfo.allergens.0',
				'burgers.baguetteMozzarella.productInfo.allergens.1',
				'burgers.baguetteMozzarella.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'burgers.baguetteChickenBreast.name',
		description: 'burgers.baguetteChickenBreast.description',
		image: 'baguetteChickenBreast.webp',
		price: 10.0,
		productInfo: {
			allergens: [
				'burgers.baguetteChickenBreast.productInfo.allergens.0',
				'burgers.baguetteChickenBreast.productInfo.allergens.1',
				'burgers.baguetteChickenBreast.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'burgers.baguetteTonno.name',
		description: 'burgers.baguetteTonno.description',
		image: 'baguetteTonno.webp',
		price: 9.0,
		productInfo: {
			allergens: [
				'burgers.baguetteTonno.productInfo.allergens.0',
				'burgers.baguetteTonno.productInfo.allergens.1',
				'burgers.baguetteTonno.productInfo.allergens.2',
				'burgers.baguetteTonno.productInfo.allergens.3',
			],
		},
	},
];
export default burgers;
