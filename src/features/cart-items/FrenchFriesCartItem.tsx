import 'react';
import { FrenchFriesSizes } from '../french-fries/type/FrenchFriesTypes';
import styles from './cartPage.module.css';
import { useTranslation } from 'react-i18next';

interface FrenchFriesCartItemProps {
	name: string;
	size?: FrenchFriesSizes; // Correct type
	quantity: number;
}

const FrenchFriesCartItem: React.FC<FrenchFriesCartItemProps> = ({ name, size, quantity }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.sizeExtras}>
			<span className={styles.itemName}>
				{name} ({quantity} {t('pcs')})
			</span>
			{size && (
				<div>
					{t('Size')}: {size.size} - {size.price.toFixed(2)} €
				</div>
			)}
		</div>
	);
};

export default FrenchFriesCartItem;
