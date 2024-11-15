import 'react';
import { useTranslation } from 'react-i18next';
import burgerData from './BurgerData';
import styles from '../pasta-items/pastaMenu.module.css';

import BurgerItem from './BurgerItem';

const BurgerMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{burgerData.map((burger) => (
				<BurgerItem
					key={burger.name}
					name={t(burger.name)}
					description={t(burger.description)}
					image={burger.image}
					price={burger.price}
					productInfo={burger.productInfo}
				/>
			))}
		</div>
	);
};
export default BurgerMenu;
