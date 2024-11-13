import 'react';
import { ExtraIngredientCalzone } from '../calzone/type/CalzoneTypes';
import styles from './cartPage.module.css';
import { useTranslation } from 'react-i18next';

interface CalzoneCartItemProps {
	name: string;
	size?: string;
	extras?: ExtraIngredientCalzone[];
	quantity: number;
}

const CalzoneCartItem: React.FC<CalzoneCartItemProps> = ({ name, size, extras, quantity }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.sizeExtras}>
			<span className={styles.itemName}>
				{name} ({quantity} {t('pcs')})
			</span>
			{size && (
				<div>
					{t('Size')}: {size}
				</div>
			)}
			{extras && extras.length > 0 && (
				<div>
					{t('Extras')}: {extras.map((extra) => extra.label).join(', ')}
				</div>
			)}
		</div>
	);
};

export default CalzoneCartItem;
