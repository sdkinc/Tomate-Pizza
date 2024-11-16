import 'react';
import { t } from 'i18next';
import styles from './cartPage.module.css';

interface AmericanaCartItemProps {
	name: string;
	description?: string;
	quantity: number;
}

const AmericanaCartItem: React.FC<AmericanaCartItemProps> = ({ name, description, quantity }) => {
	return (
		<div className={styles.itemDetails}>
			<div className={styles.itemName}>
				{name} ({quantity} {t('pcs')})
			</div>
			{description && <div className={styles.itemDescription}>{description}</div>}
		</div>
	);
};

export default AmericanaCartItem;
