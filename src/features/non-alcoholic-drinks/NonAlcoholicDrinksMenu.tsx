import 'react';
import { useTranslation } from 'react-i18next';
import nonAlcoholicDrinksData from './NonAlcoholicDrinksData';
import styles from '../pasta-items/pastaMenu.module.css';
import NonAlcoholicDrinksItem from './NonAlcoholicDrinksItem';

const NonAlcoholicDrinksMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{nonAlcoholicDrinksData.map((nonAlcoholicDrinks) => (
				<NonAlcoholicDrinksItem
					key={nonAlcoholicDrinks.name}
					name={t(nonAlcoholicDrinks.name)}
					description={t(nonAlcoholicDrinks.description)}
					image={nonAlcoholicDrinks.image}
					price={nonAlcoholicDrinks.price}
					productInfo={nonAlcoholicDrinks.productInfo}
				/>
			))}
		</div>
	);
};
export default NonAlcoholicDrinksMenu;
