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

				{productInfo.substances && productInfo.substances.length > 0 && (
					<>
						<h3 className={styles.subsectionTitle}>{t('substances')}</h3>
						<ul className={styles.list}>
							{productInfo.substances.map((substance, index) => (
								<li key={index}>{substance}</li>
							))}
						</ul>
					</>
				)}

				{/* Allergens Section */}
				{productInfo.allergens && productInfo.allergens.length > 0 && (
					<>
						<h3 className={styles.subsectionTitle}>{t('allergens')}</h3>
						<ul className={styles.list}>
							{productInfo.allergens.map((allergen, index) => (
								<li key={index}>{allergen}</li>
							))}
						</ul>
					</>
				)}

				{productInfo.disclaimer && <p className={styles.disclaimer}>{productInfo.disclaimer}</p>}

				{productInfo.additionalInfo && (
					<p className={styles.additionalInfo}>{productInfo.additionalInfo}</p>
				)}
			</div>
		</div>
	);
};

export default ProductInfoModal;
