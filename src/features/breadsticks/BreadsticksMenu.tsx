import 'react';
import { useTranslation } from 'react-i18next';
import breadsticksData from './BreadsticksData';

import styles from '../pasta-items/pastaMenu.module.css';
import BreadsticksItem from './BreadsticksItem';

const BreadsticksMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{breadsticksData.map((breadsticks) => (
				<BreadsticksItem
					key={breadsticks.name}
					name={t(breadsticks.name)}
					description={t(breadsticks.description)}
					image={breadsticks.image}
					price={breadsticks.price}
					productInfo={breadsticks.productInfo}
				/>
			))}
		</div>
	);
};
export default BreadsticksMenu;
