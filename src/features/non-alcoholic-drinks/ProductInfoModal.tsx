import 'react';
import styles from '../pizza-items/productInfoModal.module.css';
import { useTranslation } from 'react-i18next';
import { ProductInfo } from './type/NonAlcoholicDrinksTypes';

interface ProductInfoModalProps {
	isOpen: boolean;
	onClose: () => void;
	productInfo: ProductInfo;
}

const ProductInfoModal: React.FC<ProductInfoModalProps> = ({ isOpen, onClose, productInfo }) => {
	const { t } = useTranslation();
	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modal}>
				<button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close">
					&times;
				</button>
				<h2 className={styles.title}>{t('productInfo')}</h2>

				{productInfo.allergens && productInfo.allergens.length > 0 && (
					<>
						<h3 className={styles.subsectionTitle}>{t('allergensSubstances')}</h3>
						<ul className={styles.list}>
							{productInfo.allergens.map((allergenKey, index) => (
								<li key={index}>{t(allergenKey)}</li>
							))}
						</ul>
					</>
				)}
				{productInfo.nutritionFacts && productInfo.nutritionFacts.length > 0 && (
					<>
						<h3 className={styles.subsectionTitle}>{t('nutritionFacts')}</h3>
						<p className={styles.nutritionFactsList}>
							{productInfo.nutritionFacts.map((nutritionFactsKey, index) => (
								<span key={index}>{t(nutritionFactsKey)}</span>
							))}
						</p>
					</>
				)}
				<p className={styles.disclaimer}>{t('disclaimer')}</p>

				<p className={styles.additionalInfo}>{t('additionalInfo')}</p>
			</div>
		</div>
	);
};

export default ProductInfoModal;
