import { useState } from 'react';
import styles from './pizzaModal.module.css';
import { ExtraIngredient, PizzaSize } from './type/PizzaTypes';

interface PizzaModalProps {
	name: string;
	description: string;
	sizes: PizzaSize[];
	extras: ExtraIngredient[];
	onClose: () => void;
}

const PizzaModal: React.FC<PizzaModalProps> = ({ name, description, sizes, extras, onClose }) => {
	const [selectedSize, setSelectedSize] = useState<PizzaSize | null>(sizes[0]);
	const [selectedExtras, setSelectedExtras] = useState<ExtraIngredient[]>([]);
	const [quantity, setQuantity] = useState(1);

	const handleSizeChange = (size: PizzaSize): void => {
		setSelectedSize(size);
	};

	const handleExtraToggle = (extra: ExtraIngredient): void => {
		setSelectedExtras((prev) =>
			prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
		);
	};

	const increaseQuantity = (): void => setQuantity(quantity + 1);
	const decreaseQuantity = (): void => setQuantity(quantity > 1 ? quantity - 1 : 1);

	const calculateTotalPrice = (): number => {
		const extrasTotal = selectedExtras.reduce((acc, extra) => acc + extra.price, 0);
		const singlePizzaPrice = (selectedSize ? selectedSize.price : 0) + extrasTotal;
		return singlePizzaPrice * quantity;
	};

	return (
		<div className={styles.modal} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button type="button" onClick={onClose} className={styles.closeButton}>
					✖
				</button>
				<h2>{name}</h2>
				<p>{description}</p>
				<h3>Выберите размер:</h3>
				<select
					aria-label="Размер пиццы"
					onChange={(e) => handleSizeChange(sizes[+e.target.value])}
				>
					{sizes.map((size, index) => (
						<option key={size.label} value={index}>
							{size.label} ({size.size}) - {size.price} €
						</option>
					))}
				</select>

				<h3>Ваши дополнительные ингредиенты:</h3>
				{extras.map((extra) => (
					<label key={extra.label} className={styles.extraOption}>
						<input
							type="checkbox"
							onChange={() => handleExtraToggle(extra)}
							checked={selectedExtras.includes(extra)}
						/>
						{extra.label} (+{extra.price} €)
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
					<div className={styles.totalPrice}>Итого: {calculateTotalPrice().toFixed(2)} €</div>
					<button type="button" className={styles.addToCartButton}>
						Выбрать
					</button>
				</div>
			</div>
		</div>
	);
};

export default PizzaModal;
