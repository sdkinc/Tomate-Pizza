import { Pasta } from './type/PastaTypes';

const pastas: Pasta[] = [
	{
		name: 'pastas.Napoli.name',
		description: 'pastas.Napoli.description',
		image: 'napoli.webp',
		price: 7.5,
		productInfo: {
			allergens: ['pastas.Napoli.productInfo.allergens.0', 'pastas.Napoli.productInfo.allergens.1'],
			substances: [
				'pastas.Napoli.productInfo.substances.0',
				'pastas.Napoli.productInfo.substances.1',
			],
		},
	},
	{
		name: 'pastas.Bolognese.name',
		description: 'pastas.Bolognese.description',
		image: 'bolognese.webp',
		price: 8.5,
		productInfo: {
			allergens: [
				'pastas.Bolognese.productInfo.allergens.0',
				'pastas.Bolognese.productInfo.allergens.1',
			],
			substances: [
				'pastas.Bolognese.productInfo.substances.0',
				'pastas.Bolognese.productInfo.substances.1',
			],
		},
	},
	{
		name: 'pastas.Carbonara.name',
		description: 'pastas.Carbonara.description',
		image: 'carbonara.webp',
		price: 8.5,
		productInfo: {
			allergens: [
				'pastas.Carbonara.productInfo.allergens.0',
				'pastas.Carbonara.productInfo.allergens.1',
				'pastas.Carbonara.productInfo.allergens.2',
			],
			substances: [
				'pastas.Carbonara.productInfo.substances.0',
				'pastas.Carbonara.productInfo.substances.1',
			],
		},
	},
	{
		name: 'pastas.FruttiDiMare.name',
		description: 'pastas.FruttiDiMare.description',
		image: 'fruttdiMare.webp',
		price: 8.5,
		productInfo: {
			allergens: [
				'pastas.FruttiDiMare.productInfo.allergens.0',
				'pastas.FruttiDiMare.productInfo.allergens.1',
				'pastas.FruttiDiMare.productInfo.allergens.2',
			],
			substances: [
				'pastas.FruttiDiMare.productInfo.substances.0',
				'pastas.FruttiDiMare.productInfo.substances.1',
			],
		},
	},
];

export default pastas;
