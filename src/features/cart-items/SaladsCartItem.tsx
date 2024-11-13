import 'react';

import styles from './cartPage.module.css';
import { useTranslation } from 'react-i18next';
import { SaladsIngredients } from '../salads/type/SaladsType';

interface SaladsCartItemProps {
	name: string;
	saladsIngredients?: SaladsIngredients[];
	quantity: number;
}

const SaladsCartItem: React.FC<SaladsCartItemProps> = ({ name, saladsIngredients, quantity }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.sizeExtras}>
			<span className={styles.itemName}>
				{name} ({quantity} {t('pcs')})
			</span>
			{saladsIngredients && saladsIngredients.length > 0 && (
				<div>
					{t('Ingredients')}: {saladsIngredients.map((ingredient) => ingredient.label).join(', ')}
				</div>
			)}
		</div>
	);
};

export default SaladsCartItem;
