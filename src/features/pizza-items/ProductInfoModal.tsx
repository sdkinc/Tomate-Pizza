import 'react';
import styles from './productInfoModal.module.css';
import { ProductInfo } from './type/PizzaTypes';
import { useTranslation } from 'react-i18next';

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

				{/* Substances Section */}
				{productInfo.substances && productInfo.substances.length > 0 && (
					<>
						<h3 className={styles.subsectionTitle}>{t('substances')}</h3>
						<ul className={styles.list}>
							{productInfo.substances.map((substanceKey, index) => (
								<li key={index}>{t(substanceKey)}</li>
							))}
						</ul>
					</>
				)}

				{/* Allergens Section */}
				{productInfo.allergens && productInfo.allergens.length > 0 && (
					<>
						<h3 className={styles.subsectionTitle}>{t('allergens')}</h3>
						<ul className={styles.list}>
							{productInfo.allergens.map((allergenKey, index) => (
								<li key={index}>{t(allergenKey)}</li>
							))}
						</ul>
					</>
				)}

				{/* Disclaimer Section */}
				<p className={styles.disclaimer}>{t('disclaimer')}</p>

				{/* Additional Info Section */}
				<p className={styles.additionalInfo}>{t('additionalInfo')}</p>
			</div>
		</div>
	);
};

export default ProductInfoModal;
