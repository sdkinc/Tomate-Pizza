import 'react';
import { ExtraIngredient } from '../pizza-items/type/PizzaTypes';
import styles from './cartPage.module.css';
import { useTranslation } from 'react-i18next';

interface PizzaCartItemProps {
	name: string;
	size?: string;
	extras?: ExtraIngredient[];
	quantity: number;
}

const PizzaCartItem: React.FC<PizzaCartItemProps> = ({ name, size, extras, quantity }) => {
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
					{t('Extras')}: {extras.map((extra) => t(`ingredients.${extra.label}`)).join(', ')}
				</div>
			)}
		</div>
	);
};

export default PizzaCartItem;
