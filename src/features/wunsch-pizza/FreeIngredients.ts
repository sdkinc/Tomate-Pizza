import { ExtraIngredient } from './type/WunschPizzaTypes';

const freeIngredients: Omit<ExtraIngredient, 'priceBySize'>[] = [
	{ label: 'Chili' },
	{ label: 'Knoblauch' },
	{ label: 'Ananas' },
	{ label: 'Artischocken' },
	{ label: 'BBQ-Sauce' },
	{ label: 'Bolognese' },
	{ label: 'Broccoli' },
	{ label: 'Champignons' },
	{ label: 'Currysauce' },
	{ label: 'Ei' },
	{ label: 'Gorgonzola' },
	{ label: 'Hühnerfleisch' },
	{ label: 'Jalapenos' },
	{ label: 'Kapern' },
	{ label: 'Käse' },
	{ label: 'Käserand' },
	{ label: 'Mais' },
	{ label: 'Meeresfrüchten' },
	{ label: 'Mozzarella' },
	{ label: 'Oliven' },
	{ label: 'Paprika' },
	{ label: 'Parmaschinken' },
	{ label: 'Peperoni' },
	{ label: 'Rinderhackfleisch' },
	{ label: 'Rucola' },
	{ label: 'Salami' },
	{ label: 'Sardellen' },
	{ label: 'Schinken' },
	{ label: 'Shrimps' },
	{ label: 'Spinat' },
	{ label: 'Sucuk' },
	{ label: 'Thunfisch' },
	{ label: 'Tomatenscheiben' },
	{ label: 'Zwiebeln' },
];

export default freeIngredients;
