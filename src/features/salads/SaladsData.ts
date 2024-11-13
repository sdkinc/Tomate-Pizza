import 'react';
import { Salads } from './type/SaladsType';

const salads: Salads[] = [
	{
		name: 'salads.green.name',
		description: 'salads.green.description',
		image: 'green.webp',
		price: 5.0,
		productInfo: {
			allergens: ['salads.green.productInfo.allergens.0'],
		},
	},
	{
		name: 'salads.cucumber.name',
		description: 'salads.cucumber.description',
		image: 'cucumber.webp',
		price: 6.0,
	},
	{
		name: 'salads.mixed.name',
		description: 'salads.mixed.description',
		image: 'mixed.webp',
		price: 7.5,
		productInfo: {
			allergens: ['salads.mixed.productInfo.allergens.0'],
		},
	},
	{
		name: 'salads.tomato.name',
		description: 'salads.tomato.description',
		image: 'tomato.webp',
		price: 7.0,
		productInfo: {
			allergens: ['salads.tomato.productInfo.allergens.0'],
		},
	},
	{
		name: 'salads.mozzarella.name',
		description: 'salads.mozzarella.description',
		image: 'mozzarella.webp',
		price: 8.5,
		productInfo: {
			allergens: ['salads.mozzarella.productInfo.allergens.0'],
		},
	},
	{
		name: 'salads.greek.name',
		description: 'salads.greek.description',
		image: 'greek.webp',
		price: 8.0,
		productInfo: {
			allergens: ['salads.greek.productInfo.allergens.0'],
		},
	},
	{
		name: 'salads.nicoise.name',
		description: 'salads.nicoise.description',
		image: 'nicoise.webp',
		price: 8.5,
		productInfo: {
			allergens: [
				'salads.nicoise.productInfo.allergens.0',
				'salads.nicoise.productInfo.allergens.1',
				'salads.nicoise.productInfo.allergens.2',
				'salads.nicoise.productInfo.allergens.3',
				'salads.nicoise.productInfo.allergens.4',
			],
		},
	},
	{
		name: 'salads.chef.name',
		description: 'salads.chef.description',
		image: 'chef.webp',
		price: 8.5,
		productInfo: {
			allergens: [
				'salads.chef.productInfo.allergens.0',
				'salads.chef.productInfo.allergens.1',
				'salads.chef.productInfo.allergens.2',
			],
		},
	},
];
export default salads;
