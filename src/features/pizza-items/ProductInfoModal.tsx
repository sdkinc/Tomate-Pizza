import 'react';
import styles from './productInfoModal.module.css';
import { ProductInfo } from './type/PizzaTypes';

interface ProductInfoModalProps {
	isOpen: boolean;
	onClose: () => void;
	productInfo: ProductInfo;
}

const ProductInfoModal: React.FC<ProductInfoModalProps> = ({ isOpen, onClose, productInfo }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modal}>
				<button className={styles.closeButton} onClick={onClose} aria-label="Close">
					&times;
				</button>
				<h2 className={styles.title}>Weitere Produktinformationen</h2>

				{/* Substances Section */}
				{productInfo.substances && productInfo.substances.length > 0 && (
					<>
						<h3 className={styles.subsectionTitle}>
							Substanzen oder Produkte, die Allergien oder Intoleranzen hervorrufen können.
						</h3>
						<ul className={styles.list}>
							{productInfo.substances.map((substance, index) => (
								<li key={index}>{substance}</li>
							))}
						</ul>
					</>
				)}

				{/* Allergens Section */}
				<h3 className={styles.subsectionTitle}>Allergene</h3>
				<ul className={styles.list}>
					{productInfo.allergens.map((allergen, index) => (
						<li key={index}>{allergen}</li>
					))}
				</ul>

				{/* Disclaimer Section */}
				{productInfo.disclaimer && <p className={styles.disclaimer}>{productInfo.disclaimer}</p>}

				{/* Additional Info Section */}
				{productInfo.additionalInfo && (
					<p className={styles.additionalInfo}>{productInfo.additionalInfo}</p>
				)}
			</div>
		</div>
	);
};

export default ProductInfoModal;
