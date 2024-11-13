import 'react';
import { useTranslation } from 'react-i18next';
import startersData from './StartersData';

import styles from '../pasta-items/pastaMenu.module.css';
import StartersItem from './StartersItem';

const StartersMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{startersData.map((starters) => (
				<StartersItem
					key={starters.name}
					name={t(starters.name)}
					description={starters.description ? t(starters.description) : ''}
					image={starters.image}
					price={starters.price}
					productInfo={starters.productInfo}
				/>
			))}
		</div>
	);
};

export default StartersMenu;
