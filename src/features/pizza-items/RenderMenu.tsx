import 'react';
import PizzaMenu from './PizzaMenu';

interface RenderMenuProps {
	selectedMenu: string;
}

const RenderMenu: React.FC<RenderMenuProps> = ({ selectedMenu }) => {
	switch (selectedMenu) {
		case 'Appetizers':
			// return <AppetizerMenu />;
			return <PizzaMenu />;

		case 'Salads':
			// return <SaladMenu />;
			return <PizzaMenu />;

		case 'Breadsticks':
			// return <BreadMenu />;
			return <PizzaMenu />;

		case 'Pizza':
			return <PizzaMenu />;

		case 'Custom Pizza':
			// return <CustomPizzaMenu />;
			return <PizzaMenu />;

		case 'Calzone':
			// return <CalzoneMenu />;
			return <PizzaMenu />;

		case 'Pasta':
			// return <PastaMenu />;
			return <PizzaMenu />;

		case 'Meat Dishes':
			// return <MeatDishesMenu />;
			return <PizzaMenu />;

		case 'Burgers & Baguettes':
			// return <BurgerBaguetteMenu />;
			return <PizzaMenu />;

		case 'American Diner':
			// return <DinerMenu />;
			return <PizzaMenu />;

		case 'French Fries':
			// return <FriesMenu />;
			return <PizzaMenu />;

		case 'Desserts':
			// return <DessertMenu />;
			return <PizzaMenu />;

		case 'Ice Cream':
			// return <IceCreamMenu />;
			return <PizzaMenu />;

		case 'Non-Alcoholic Drinks':
			// return <NonAlcoholicDrinksMenu />;
			return <PizzaMenu />;

		case 'Alcoholic Drinks':
			// return <AlcoholicDrinksMenu />;
			return <PizzaMenu />;

		default:
			return <PizzaMenu />;
	}
};

export default RenderMenu;
