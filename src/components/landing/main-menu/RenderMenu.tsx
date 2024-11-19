import 'react';
import PizzaMenu from '../../../features/pizza-items/PizzaMenu';
import PastaMenu from '../../../features/pasta-items/PastaMenu';
import styles from './renderMenu.module.css';
import WunschPizzaMenu from '../../../features/wunsch-pizza/WunschPizzaMenu';
import CalzoneMenu from '../../../features/calzone/CalzoneMenu';
import StartersMenu from '../../../features/starters/StartersMenu';
import SaladsMenu from '../../../features/salads/SaladsMenu';
import BreadsticksMenu from '../../../features/breadsticks/BreadsticksMenu';
import MeatDishesMenu from '../../../features/meat-dishes/MeatDishesMenu';
import { useTranslation } from 'react-i18next';
import FrenchFriesMenu from '../../../features/french-fries/FrenchFriesMenu';
import BurgerMenu from '../../../features/burger/BurgerMenu';
import AmericanMenu from '../../../features/americana-diner/AmericanaMenu';
import DessertsMenu from '../../../features/desserts/DessertsMenu';
import IceCreamMenu from '../../../features/ice-cream/IceCreamMenu';

interface RenderMenuProps {
	selectedMenu: string;
	excludeCategory?: string;
}

const RenderMenu: React.FC<RenderMenuProps> = ({ selectedMenu, excludeCategory }) => {
	const { t } = useTranslation();
	const getMenuComponent = (category: string): JSX.Element | null => {
		switch (category) {
			case 'Appetizers':
				return <StartersMenu />;
			case 'Salads':
				return <SaladsMenu />;
			case 'Breadsticks':
				return <BreadsticksMenu />;
			case 'Custom Pizza':
				return <WunschPizzaMenu />;
			case 'Calzone':
				return <CalzoneMenu />;
			case 'Meat Dishes':
				return <MeatDishesMenu />;
			case 'Burgers & Baguettes':
				return <BurgerMenu />;
			case 'American Diner':
				return <AmericanMenu />;
			case 'French Fries':
				return <FrenchFriesMenu />;
			case 'Desserts':
				return <DessertsMenu />;
			case 'Ice Cream':
				return <IceCreamMenu />;
			case 'Non-Alcoholic Drinks':
			case 'Alcoholic Drinks':
				return <PastaMenu />;
			case 'Pizza':
				return <PizzaMenu />;
			case 'Pasta':
				return <PastaMenu />;
			default:
				return null;
		}
	};

	if (selectedMenu === 'All') {
		const allCategories = [
			'Appetizers',
			'Salads',
			'Breadsticks',
			'Pizza',
			'Custom Pizza',
			'Calzone',
			'Pasta',
			'Meat Dishes',
			'Burgers & Baguettes',
			'American Diner',
			'French Fries',
			'Desserts',
			'Ice Cream',
			'Non-Alcoholic Drinks',
			'Alcoholic Drinks',
		];
		return (
			<>
				{allCategories
					.filter((category) => category !== excludeCategory)
					.map((category) => (
						<div key={category} className={styles.categorySection}>
							<div className={styles.imageContainer}>
								<img
									src={`/${category.replace(/\s/g, '')}.webp`}
									alt={category}
									className={styles.categoryImage}
								/>
							</div>
							<div className={styles.titleBox}>
								<h2 className={styles.categoryTitle}>{t(`categories.${category}`)}</h2>
								{getMenuComponent(category)}
							</div>
						</div>
					))}
			</>
		);
	}

	return getMenuComponent(selectedMenu);
};

export default RenderMenu;
