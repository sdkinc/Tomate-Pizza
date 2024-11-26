import 'react';
import { SauceOption } from '../french-fries/type/FrenchFriesTypes';
import styles from './cartPage.module.css';
import { useTranslation } from 'react-i18next';

interface FrenchFriesCartItemProps {
	name: string;
	size?: string;
	sauces?: SauceOption[];
	quantity: number;
}

const FrenchFriesCartItem: React.FC<FrenchFriesCartItemProps> = ({
	name,
	size,
	sauces = [],
	quantity,
}) => {
	const { t } = useTranslation();

	return (
		<div className={styles.sizeExtras}>
			<span className={styles.itemName}>
				{name} ({quantity} {t('pcs')})
			</span>
			{size && (
				<div>
					{t('Size')}: {t(`frenchFriesSizes.${size}`)}
				</div>
			)}
			{sauces.length > 0 && (
				<div>
					{t('Sauces')}: {sauces.map((sauce) => t(`frenchFriesSauces.${sauce.label}`)).join(', ')}
				</div>
			)}
		</div>
	);
};

export default FrenchFriesCartItem;
