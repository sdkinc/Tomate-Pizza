import 'react';
import { useTranslation } from 'react-i18next';
import wunschPizzaData from './WunschPizzaData';
import WunschPizzaItem from './WunschPizzaItem';
import styles from '../pizza-items/pizzaMenu.module.css';
import extraIngredients from '../pizza-items/ExtraIngredients';

const WunschPizzaMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			<WunschPizzaItem
				key={wunschPizzaData.name}
				name={t(wunschPizzaData.name)}
				description={t(wunschPizzaData.description)}
				image={wunschPizzaData.image}
				sizes={wunschPizzaData.sizes}
				extras={extraIngredients}
				productInfo={wunschPizzaData.productInfo}
			/>
		</div>
	);
};

export default WunschPizzaMenu;
