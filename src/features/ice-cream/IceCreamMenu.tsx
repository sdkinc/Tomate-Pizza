import 'react';
import { useTranslation } from 'react-i18next';
import iceCreamData from './IceCreamData';
import styles from '../pasta-items/pastaMenu.module.css';

import IceCreamItem from './IceCreamItem';

const DessertsMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{iceCreamData.map((iceCream) => (
				<IceCreamItem
					key={iceCream.name}
					name={t(iceCream.name)}
					description={t(iceCream.description)}
					image={iceCream.image}
					price={iceCream.price}
					productInfo={iceCream.productInfo}
				/>
			))}
		</div>
	);
};
export default DessertsMenu;
