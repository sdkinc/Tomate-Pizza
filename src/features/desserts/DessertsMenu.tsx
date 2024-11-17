import 'react';
import { useTranslation } from 'react-i18next';
import dessertsData from './DessertsData';
import styles from '../pasta-items/pastaMenu.module.css';

import DessertsItem from './DessertsItem';

const DessertsMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{dessertsData.map((desserts) => (
				<DessertsItem
					key={desserts.name}
					name={t(desserts.name)}
					description={t(desserts.description)}
					image={desserts.image}
					price={desserts.price}
					productInfo={desserts.productInfo}
				/>
			))}
		</div>
	);
};
export default DessertsMenu;
