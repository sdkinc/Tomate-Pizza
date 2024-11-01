import 'react';
import PizzaMenu from '../../../features/pizza-items/PizzaMenu';
import PastaMenu from '../../../features/pasta-items/PastaMenu';
import styles from './renderMenu.module.css';

interface RenderMenuProps {
	selectedMenu: string;
	excludeCategory?: string;
}

const RenderMenu: React.FC<RenderMenuProps> = ({ selectedMenu, excludeCategory }) => {
	const getMenuComponent = (category: string): JSX.Element | null => {
		switch (category) {
			case 'Appetizers':
			case 'Salads':
			case 'Breadsticks':
			case 'Custom Pizza':
			case 'Calzone':
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
							<img
								src={`/${category.replace(/\s/g, '')}.webp`}
								alt={category}
								className={styles.categoryImage}
							/>
							<h2 className={styles.categoryTitle}>{category}</h2>
							{getMenuComponent(category)}
						</div>
					))}
			</>
		);
	}

	return getMenuComponent(selectedMenu);
};

export default RenderMenu;
