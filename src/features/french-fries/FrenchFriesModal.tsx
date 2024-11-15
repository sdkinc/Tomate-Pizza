import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FrenchFriesSizes } from './type/FrenchFriesTypes';
import { addItem } from '../cart-items/cartSlice';
import styles from '../pizza-items/pizzaModal.module.css';
import frenchFriesIngredients from './FrenchFriesSize';

interface FrenchFriesModalProps {
	name: string;
	description?: string;
	image: string;
	sizes: FrenchFriesSizes[];
	onClose: () => void;
}

const FrenchFriesModal: React.FC<FrenchFriesModalProps> = ({
	name,
	description,
	image,
	sizes,
	onClose,
}) => {
	const { t } = useTranslation();
	const [selectedSize, setSelectedSize] = useState<FrenchFriesSizes>(sizes[0]);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const handleSizeChange = (size: FrenchFriesSizes): void => {
		setSelectedSize(size);
	};

	const increaseQuantity = (): void => setQuantity(quantity + 1);
	const decreaseQuantity = (): void => setQuantity(quantity > 1 ? quantity - 1 : 1);

	const calculateTotalPrice = (): number => selectedSize.price * quantity;

	const handleAddToCart = (): void => {
		const uniqueId = `${name}-${selectedSize.label}`;
		dispatch(
			addItem({
				id: uniqueId,
				type: 'frenchFries',
				name,
				image,
				price: selectedSize.price, // Single item price
				quantity,
				size: selectedSize.label,
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

					<div className={styles.typeTitle}>{t('selectSize')}:</div>
					<select
						aria-label={t('frenchFriesSize')}
						onChange={(e) => handleSizeChange(sizes[+e.target.value])}
					>
						{frenchFriesIngredients.map((sizeOption, index) => (
							<option key={index} value={index}>
								{t(`frenchFriesSizes.${sizeOption.label}`)} (
								{t(`frenchFriesSizes.${sizeOption.size}`)}) - {sizeOption.price} €
							</option>
						))}
					</select>
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

export default FrenchFriesModal;
