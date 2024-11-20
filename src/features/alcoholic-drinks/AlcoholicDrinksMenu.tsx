import 'react';
import { useTranslation } from 'react-i18next';
import alcoholicDrinksData from './AlcoholicDrinksData';
import styles from '../pasta-items/pastaMenu.module.css';
import AlcoholicDrinksItem from './AlcoholicDrinksItem';

const AlcoholicDrinksMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{alcoholicDrinksData.map((alcoholicDrinks) => (
				<AlcoholicDrinksItem
					key={alcoholicDrinks.name}
					name={t(alcoholicDrinks.name)}
					description={t(alcoholicDrinks.description)}
					image={alcoholicDrinks.image}
					price={alcoholicDrinks.price}
					productInfo={alcoholicDrinks.productInfo}
				/>
			))}
		</div>
	);
};
export default AlcoholicDrinksMenu;
