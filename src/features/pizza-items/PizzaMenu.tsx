import 'react';
import { useTranslation } from 'react-i18next';
import pizzasData from './PizzaData';
import PizzaItem from './PizzaItem';
import styles from './pizzaMenu.module.css';
import extraIngredients from './ExtraIngredients';

const PizzaMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{pizzasData.map((pizza) => (
				<PizzaItem
					key={pizza.name}
					name={t(pizza.name)}
					description={t(pizza.description)}
					image={pizza.image}
					sizes={pizza.sizes}
					extras={extraIngredients}
					productInfo={pizza.productInfo}
				/>
			))}
		</div>
	);
};

export default PizzaMenu;
