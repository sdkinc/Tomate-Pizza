import 'react';
import { useTranslation } from 'react-i18next';
import calzoneData from './CalzoneData';
import styles from '../pizza-items/pizzaMenu.module.css';
import CalzoneItem from './CalzoneItem';
import extraIngredientsCalzone from './ExtraIngredientsCalzone';

const CalzoneMenu: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.pageContainer}>
			{calzoneData.map((calzone) => (
				<CalzoneItem
					key={calzone.name}
					name={t(calzone.name)}
					description={t(calzone.description)}
					image={calzone.image}
					sizes={calzone.sizes}
					extrasCalzone={extraIngredientsCalzone}
					productInfo={calzone.productInfo}
				/>
			))}
		</div>
	);
};

export default CalzoneMenu;
