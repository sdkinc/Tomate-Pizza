import 'react';
import { useTranslation } from 'react-i18next';
import frenchFriesData from './FrenchFriesData';
import FrenchFriesItem from './FrenchFriesItem';
import styles from '../pizza-items/pizzaMenu.module.css';
import sauceOptions from './SauceOption';

const FrenchFriesMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{frenchFriesData.map((frenchFries) => (
				<FrenchFriesItem
					key={frenchFries.name}
					name={t(frenchFries.name)}
					description={frenchFries.description ? t(frenchFries.description) : ''}
					image={frenchFries.image}
					sizes={frenchFries.sizes || []}
					sauces={sauceOptions}
					productInfo={frenchFries.productInfo}
				/>
			))}
		</div>
	);
};

export default FrenchFriesMenu;
