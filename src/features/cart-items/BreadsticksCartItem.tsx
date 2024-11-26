import 'react';
import { t } from 'i18next';
import styles from './cartPage.module.css';
import { FreeIngredient } from '../wunsch-pizza/type/WunschPizzaTypes';

interface BreadsticksCartItemProps {
	name: string;
	freeIngredients?: FreeIngredient[];
	quantity: number;
}

const BreadsticksCartItem: React.FC<BreadsticksCartItemProps> = ({
	name,
	freeIngredients,
	quantity,
}) => {
	return (
		<div className={styles.sizeExtras}>
			<span className={styles.itemName}>
				{name} ({quantity} {t('pcs')})
			</span>

			{freeIngredients && freeIngredients.length > 0 && (
				<div>
					{t('Free Ingredients')}:{' '}
					{freeIngredients.map((ingredient) => t(`ingredients.${ingredient.label}`)).join(', ')}
				</div>
			)}
		</div>
	);
};

export default BreadsticksCartItem;
