import 'react';
import { useTranslation } from 'react-i18next';
import saladsData from './SaladsData';
import saladsIngredients from './SaladsIngredients';
import styles from '../pasta-items/pastaMenu.module.css';
import SaladsItem from './SaladsItem';

const SaladsMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{saladsData.map((salads) => (
				<SaladsItem
					key={salads.name}
					name={t(salads.name)}
					description={t(salads.description)}
					image={salads.image}
					price={salads.price}
					saladsIngredients={saladsIngredients}
					productInfo={salads.productInfo}
				/>
			))}
		</div>
	);
};
export default SaladsMenu;
