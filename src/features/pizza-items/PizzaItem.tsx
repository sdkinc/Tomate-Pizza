import { useState } from 'react';
import { PizzaSize, ExtraIngredient } from './type/PizzaTypes';
import AddIcon from '@mui/icons-material/Add';
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
		<div className={styles.pageContainer}>
			<div className={styles.pizzaItem}>
				<button
					type="button"
					className={styles.addButton}
					onClick={openModal}
					aria-label="Добавить пиццу"
				>
					<AddIcon fontSize="large" />
				</button>
				<img src={image} alt={name} className={styles.pizzaImage} />
				<div className={styles.pizzaInfo}>
					<h3 className={styles.pizzaName}>{name}</h3>
					<p className={styles.pizzaDescription}>{description}</p>
					<p className={styles.pizzaPrice}>{sizes[0].price} €</p>
				</div>
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
