import 'react';
import { Ingredients } from '../pasta-items/type/PastaTypes';
import styles from './cartPage.module.css';
import { useTranslation } from 'react-i18next';

interface PastaCartItemProps {
	name: string;
	ingredients?: Ingredients[];
	quantity: number;
}

const PastaCartItem: React.FC<PastaCartItemProps> = ({ name, ingredients, quantity }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.sizeExtras}>
			<span className={styles.itemName}>
				{name} ({quantity} {t('pcs')})
			</span>
			{ingredients && ingredients.length > 0 && (
				<div>
					{t('Ingredients')}:{' '}
					{ingredients.map((ingredient) => t(`ingredients.${ingredient.label}`)).join(', ')}
				</div>
			)}
		</div>
	);
};

export default PastaCartItem;
