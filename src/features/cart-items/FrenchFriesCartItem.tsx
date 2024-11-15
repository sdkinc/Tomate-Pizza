import 'react';
import { FrenchFriesSizes, SauceOption } from '../french-fries/type/FrenchFriesTypes';
import styles from './cartPage.module.css';
import { useTranslation } from 'react-i18next';

interface FrenchFriesCartItemProps {
	name: string;
	size?: FrenchFriesSizes; // Используем полный объект
	sauces?: SauceOption[]; // Массив соусов
	quantity: number;
}

const FrenchFriesCartItem: React.FC<FrenchFriesCartItemProps> = ({
	name,
	size: frenchFriesSize, // Используем имя, совпадающее с тем, что передаем в `CartItem`
	sauces = [],
	quantity,
}) => {
	const { t } = useTranslation();

	return (
		<div className={styles.sizeExtras}>
			<span className={styles.itemName}>
				{name} ({quantity} {t('pcs')})
			</span>
			{frenchFriesSize ? (
				<div>
					{t('Size')}: {t(`frenchFriesSizes.${frenchFriesSize.size}`)} -{' '}
					{frenchFriesSize.price.toFixed(2)} €
				</div>
			) : (
				<div>
					{t('Size')}: {t('not specified')}
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
