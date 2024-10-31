import { useState } from 'react';
import { PizzaSize, ExtraIngredient } from './type/PizzaTypes';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from './pizzaItem.module.css';
import PizzaModal from './PizzaModal';

interface PizzaItemProps {
	name: string;
	description: string;
	image: string;
	sizes: PizzaSize[];
	extras: ExtraIngredient[];
}

const PizzaItem: React.FC<PizzaItemProps> = ({ name, description, image, sizes, extras }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = (): void => setIsModalOpen(true);
	const closeModal = (): void => setIsModalOpen(false);

	return (
		<div className={styles.pizzaItem}>
			<div className={styles.pizzaHeader}>
				<h3 className={styles.pizzaName}>{name}</h3>
				<p className={styles.pizzaPrice}>{sizes[0].price} €</p>
			</div>
			<p className={styles.pizzaDescription}>{description}</p>
			<img src={image} alt={name} className={styles.pizzaImage} />
			<div className={styles.pizzaActions}>
				<button
					type="button"
					className={styles.viewButton}
					onClick={openModal}
					aria-label="Посмотреть пиццу"
				>
					<VisibilityIcon fontSize="medium" />
				</button>
				<button type="button" className={styles.selectButton}>
					{/* {`Выбрать (${sizes[0].size})`} */}
					{'Выбрать '}
				</button>
			</div>
			{isModalOpen && (
				<PizzaModal
					name={name}
					description={description}
					sizes={sizes}
					extras={extras}
					onClose={closeModal}
				/>
			)}
		</div>
	);
};

export default PizzaItem;
