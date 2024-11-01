import { useState } from 'react';
import styles from './pastaModal.module.css';
import { Ingredients } from './type/PastaTypes';
import { t } from 'i18next';

interface PastaModalProps {
	name: string;
	description: string;
	price: number;
	ingredients: Ingredients[];
	onClose: () => void;
}

const PastaModal: React.FC<PastaModalProps> = ({
	name,
	description,
	price,
	ingredients,
	onClose,
}) => {
	const [quantity, setQuantity] = useState(1);

	const increaseQuantity = (): void => setQuantity(quantity + 1);
	const decreaseQuantity = (): void => setQuantity(quantity > 1 ? quantity - 1 : 1);

	const calculateTotalPrice = (): number => {
		return price * quantity;
	};

	return (
		<div className={styles.modal} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button type="button" onClick={onClose} className={styles.closeButton}>
					✖
				</button>
				<h2>{name}</h2>
				<p>{description}</p>

				<h3>{t('yourTypeOfPasta')}:</h3>
				{ingredients.map((ingredient) => (
					<label key={ingredient.label} className={styles.extraOption}>
						<input type="checkbox" />
						{ingredient.label}
					</label>
				))}

				<div className={styles.footer}>
					<div className={styles.quantityControls}>
						<button type="button" onClick={decreaseQuantity} className={styles.quantityButton}>
							-
						</button>
						<span className={styles.quantity}>{quantity}</span>
						<button type="button" onClick={increaseQuantity} className={styles.quantityButton}>
							+
						</button>
					</div>
					<div className={styles.totalPrice}>
						{/* Здесь отображается корректная общая сумма */}
						{t('total')}: {calculateTotalPrice().toFixed(2)} €
					</div>
					<button type="button" className={styles.addToCartButton}>
						{t('choose')}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PastaModal;
