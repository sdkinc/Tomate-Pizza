import 'react';
import { ExtraIngredient } from '../pizza-items/type/PizzaTypes';
import styles from './cartPage.module.css';
import { useTranslation } from 'react-i18next';
import { FreeIngredient } from '../wunsch-pizza/type/WunschPizzaTypes';

interface WunschPizzaCartItemProps {
	name: string;
	size?: string;
	extras?: ExtraIngredient[];
	freeIngredients?: FreeIngredient[];
	quantity: number;
}

const WunschPizzaCartItem: React.FC<WunschPizzaCartItemProps> = ({
	name,
	size,
	extras,
	freeIngredients,
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
					{t('Size')}: {size}
				</div>
			)}
			{extras && extras.length > 0 && (
				<div>
					{t('Extras')}: {extras.map((extra) => extra.label).join(', ')}
				</div>
			)}
			{freeIngredients && freeIngredients.length > 0 && (
				<div>
					{t('Free Ingredients')}:{' '}
					{freeIngredients.map((ingredient) => ingredient.label).join(', ')}
				</div>
			)}
		</div>
	);
};

export default WunschPizzaCartItem;
