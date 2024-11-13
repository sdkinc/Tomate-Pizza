import 'react';
import PizzaMenu from '../../../features/pizza-items/PizzaMenu';
import PastaMenu from '../../../features/pasta-items/PastaMenu';
import styles from './renderMenu.module.css';
import WunschPizzaMenu from '../../../features/wunsch-pizza/WunschPizzaMenu';
import CalzoneMenu from '../../../features/calzone/CalzoneMenu';
import StartersMenu from '../../../features/starters/StartersMenu';

interface RenderMenuProps {
	selectedMenu: string;
	excludeCategory?: string;
}

const RenderMenu: React.FC<RenderMenuProps> = ({ selectedMenu, excludeCategory }) => {
	const getMenuComponent = (category: string): JSX.Element | null => {
		switch (category) {
			case 'Appetizers':
				return <StartersMenu />;
			case 'Salads':
			case 'Breadsticks':
			case 'Custom Pizza':
				return <WunschPizzaMenu />;
			case 'Calzone':
				return <CalzoneMenu />;
			case 'Meat Dishes':
			case 'Burgers & Baguettes':
			case 'American Diner':
			case 'French Fries':
			case 'Desserts':
			case 'Ice Cream':
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
								<h2 className={styles.categoryTitle}>{category}</h2>
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
