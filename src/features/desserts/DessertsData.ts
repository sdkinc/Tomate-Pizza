import { Desserts } from './type/DessertsTypes';

const desserts: Desserts[] = [
	{
		name: 'desserts.cassata.name',
		description: 'desserts.cassata.description',
		image: 'cassata.webp',
		price: 4.5,
		productInfo: {
			allergens: [
				'desserts.cassata.productInfo.allergens.0',
				'desserts.cassata.productInfo.allergens.1',
				'desserts.cassata.productInfo.allergens.2',
				'desserts.cassata.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'desserts.tartufo.name',
		description: 'desserts.tartufo.description',
		image: 'tartufo.webp',
		price: 4.5,
		productInfo: {
			allergens: [
				'desserts.tartufo.productInfo.allergens.0',
				'desserts.tartufo.productInfo.allergens.1',
				'desserts.tartufo.productInfo.allergens.2',
				'desserts.tartufo.productInfo.allergens.3',
				'desserts.tartufo.productInfo.allergens.4',
				'desserts.tartufo.productInfo.allergens.5',
				'desserts.tartufo.productInfo.allergens.6',
				'desserts.tartufo.productInfo.allergens.7',
				'desserts.tartufo.productInfo.allergens.8',
				'desserts.tartufo.productInfo.allergens.9',
				'desserts.tartufo.productInfo.allergens.10',
				'desserts.tartufo.productInfo.allergens.11',
			],
		},
	},
	{
		name: 'desserts.tiramisu.name',
		description: 'desserts.tiramisu.description',
		image: 'tiramisu.webp',
		price: 6.0,
		productInfo: {
			allergens: [
				'desserts.tiramisu.productInfo.allergens.0',
				'desserts.tiramisu.productInfo.allergens.1',
				'desserts.tiramisu.productInfo.allergens.2',
				'desserts.tiramisu.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'desserts.strudel.name',
		description: 'desserts.strudel.description',
		image: 'strudel.webp',
		price: 5.5,
		productInfo: {
			allergens: [
				'desserts.strudel.productInfo.allergens.0',
				'desserts.strudel.productInfo.allergens.1',
				'desserts.strudel.productInfo.allergens.2',
				'desserts.strudel.productInfo.allergens.3',
			],
		},
	},
	{
		name: 'desserts.muffin.name',
		description: 'desserts.muffin.description',
		image: 'muffin.webp',
		price: 2.0,
		productInfo: {
			allergens: [
				'desserts.muffin.productInfo.allergens.0',
				'desserts.muffin.productInfo.allergens.1',
				'desserts.muffin.productInfo.allergens.2',
				'desserts.muffin.productInfo.allergens.3',
			],
		},
	},
];
export default desserts;
