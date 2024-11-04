import { Pizza } from './type/PizzaTypes';

const pizzas: Pizza[] = [
	{
		name: 'pizzas.PizzaMargarita.name',
		description: 'pizzas.PizzaMargarita.description',
		image: 'margarita.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 5.0 },
			{ label: 'Mittel', size: '32 cm', price: 8.0 },
			{ label: 'Familie', size: '46×33 cm', price: 13.5 },
		],
		productInfo: {
			substances: ['pizzas.PizzaMargarita.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaMargarita.productInfo.allergens.0',
				'pizzas.PizzaMargarita.productInfo.allergens.1',
				'pizzas.PizzaMargarita.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaFunghi.name',
		description: 'pizzas.PizzaFunghi.description',
		image: 'funghi.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 5.5 },
			{ label: 'Mittel', size: '32 cm', price: 8.5 },
			{ label: 'Familie', size: '46×33 cm', price: 14.0 },
		],
		productInfo: {
			substances: ['pizzas.PizzaFunghi.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaFunghi.productInfo.allergens.0',
				'pizzas.PizzaFunghi.productInfo.allergens.1',
				'pizzas.PizzaFunghi.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaSalami.name',
		description: 'pizzas.PizzaSalami.description',
		image: 'salami.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 6.0 },
			{ label: 'Mittel', size: '32 cm', price: 8.5 },
			{ label: 'Familie', size: '46×33 cm', price: 14.5 },
		],
		productInfo: {
			substances: ['pizzas.PizzaSalami.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaSalami.productInfo.allergens.0',
				'pizzas.PizzaSalami.productInfo.allergens.1',
				'pizzas.PizzaSalami.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaProsciutto.name',
		description: 'pizzas.PizzaProsciutto.description',
		image: 'prosciutto.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 5.5 },
			{ label: 'Mittel', size: '32 cm', price: 8.5 },
			{ label: 'Familie', size: '46×33 cm', price: 14.0 },
		],
		productInfo: {
			substances: ['pizzas.PizzaProsciutto.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaProsciutto.productInfo.allergens.0',
				'pizzas.PizzaProsciutto.productInfo.allergens.1',
				'pizzas.PizzaProsciutto.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaHawaii.name',
		description: 'pizzas.PizzaHawaii.description',
		image: 'hawaii.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 6.0 },
			{ label: 'Mittel', size: '32 cm', price: 9.0 },
			{ label: 'Familie', size: '46×33 cm', price: 15.0 },
		],
		productInfo: {
			substances: ['pizzas.PizzaHawaii.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaHawaii.productInfo.allergens.0',
				'pizzas.PizzaHawaii.productInfo.allergens.1',
				'pizzas.PizzaHawaii.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaDiavolo.name',
		description: 'pizzas.PizzaDiavolo.description',
		image: 'diavolo.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 6.5 },
			{ label: 'Mittel', size: '32 cm', price: 9.5 },
			{ label: 'Familie', size: '46×33 cm', price: 16.0 },
		],
		productInfo: {
			substances: ['pizzas.PizzaDiavolo.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaDiavolo.productInfo.allergens.0',
				'pizzas.PizzaDiavolo.productInfo.allergens.1',
				'pizzas.PizzaDiavolo.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaVegetaria.name',
		description: 'pizzas.PizzaVegetaria.description',
		image: 'vegetaria.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 6.0 },
			{ label: 'Mittel', size: '32 cm', price: 9.0 },
			{ label: 'Familie', size: '46×33 cm', price: 14.0 },
		],
		productInfo: {
			substances: ['pizzas.PizzaVegetaria.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaVegetaria.productInfo.allergens.0',
				'pizzas.PizzaVegetaria.productInfo.allergens.1',
				'pizzas.PizzaVegetaria.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaFruttiDiMare.name',
		description: 'pizzas.PizzaFruttiDiMare.description',
		image: 'fruttiDiMare.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 7.5 },
			{ label: 'Mittel', size: '32 cm', price: 10.0 },
			{ label: 'Familie', size: '46×33 cm', price: 17.0 },
		],
		productInfo: {
			substances: ['pizzas.PizzaFruttiDiMare.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaFruttiDiMare.productInfo.allergens.0',
				'pizzas.PizzaFruttiDiMare.productInfo.allergens.1',
				'pizzas.PizzaFruttiDiMare.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaQuattroStagioni.name',
		description: 'pizzas.PizzaQuattroStagioni.description',
		image: 'quattroStagioni.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 7.0 },
			{ label: 'Mittel', size: '32 cm', price: 9.5 },
			{ label: 'Familie', size: '46×33 cm', price: 16.5 },
		],
		productInfo: {
			substances: ['pizzas.PizzaQuattroStagioni.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaQuattroStagioni.productInfo.allergens.0',
				'pizzas.PizzaQuattroStagioni.productInfo.allergens.1',
				'pizzas.PizzaQuattroStagioni.productInfo.allergens.2',
			],
		},
	},
	{
		name: 'pizzas.PizzaSchinkenSalami.name',
		description: 'pizzas.PizzaSchinkenSalami.description',
		image: 'schinkenSalami.webp',
		sizes: [
			{ label: 'Klein', size: '26 cm', price: 8.5 },
			{ label: 'Mittel', size: '32 cm', price: 10.5 },
			{ label: 'Familie', size: '46×33 cm', price: 20.5 },
		],
		productInfo: {
			substances: ['pizzas.PizzaSchinkenSalami.productInfo.substances.0'],
			allergens: [
				'pizzas.PizzaSchinkenSalami.productInfo.allergens.0',
				'pizzas.PizzaSchinkenSalami.productInfo.allergens.1',
				'pizzas.PizzaSchinkenSalami.productInfo.allergens.2',
			],
		},
	},
];

export default pizzas;
