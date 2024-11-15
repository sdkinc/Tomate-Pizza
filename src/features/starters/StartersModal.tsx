import { useState } from 'react';
import styles from '../pasta-items/pastaModal.module.css';

import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart-items/cartSlice';

interface StartersModalProps {
	name: string;
	description: string;
	price: number;
	image: string;
	onClose: () => void;
}

const StartersModal: React.FC<StartersModalProps> = ({
	name,
	description,
	price,
	image,
	onClose,
}) => {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const increaseQuantity = (): void => setQuantity(quantity + 1);
	const decreaseQuantity = (): void => setQuantity(quantity > 1 ? quantity - 1 : 1);

	const calculateTotalPrice = (): number => {
		return price * quantity;
	};

	const handleAddToCart = (): void => {
		dispatch(
			addItem({
				id: name,
				type: 'starters',
				name,
				image,
				price,
				quantity,
			})
		);
		onClose();
	};

	return (
		<div className={styles.modal} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button type="button" onClick={onClose} className={styles.closeButton}>
					✖
				</button>
				<div className={styles.centeredContainer}>
					<div className={styles.nameTitle}>{name}</div>
					<div className={styles.imageContainer}>
						<img src={image} alt={name} className={styles.image} />
					</div>
					<p>{description}</p>
				</div>

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
						{t('total')}: {calculateTotalPrice().toFixed(2)} €
					</div>
					<button type="button" className={styles.addToCartButton} onClick={handleAddToCart}>
						{t('choose')}
					</button>
				</div>
			</div>
		</div>
	);
};

export default StartersModal;