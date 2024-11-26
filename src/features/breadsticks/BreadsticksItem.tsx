import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pizza-items/pizzaItem.module.css';
import ProductInfoModal from '../pizza-items/ProductInfoModal';
import { useTranslation } from 'react-i18next';
import { ProductInfo } from './type/BreadsticksTypes';
import BreadsticksModal from './BreadsticksModal';
import freeIngredients from '../wunsch-pizza/FreeIngredients';

interface BreadsticksItemProps {
	name: string;
	description: string;
	image: string;
	price: number;
	productInfo?: ProductInfo;
	freeIngredientsLimit?: number;
}

const BreadsticksItem: React.FC<BreadsticksItemProps> = ({
	name,
	description,
	image,
	price,
	productInfo,
	freeIngredientsLimit = 2,
}) => {
	const { t } = useTranslation();
	const [isBreadsticksModalOpen, setIsBreadsticksModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openBreadsticksModal = (): void => setIsBreadsticksModalOpen(true);
	const closeBreadsticksModal = (): void => setIsBreadsticksModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					openBreadsticksModal();
				}
			}}
		>
			<img src={image} alt={name} className={styles.pizzaImage} />

			<div className={styles.pizzaContent}>
				<div className={styles.topContainer}>
					<div className={styles.pizzaHeader}>
						<div className={styles.pizzaNameInfo}>
							<div className={styles.pizzaName}>{name}</div>
							<button
								type="button"
								className={styles.productInfoButton}
								onClick={(e) => {
									e.stopPropagation();
									openProductInfoModal();
								}}
								aria-label={t('View info')}
							>
								{t('Product info')}
							</button>
						</div>
						<div className={styles.priceBox}>
							<p className={styles.pizzaPrice}>{price} €</p>
						</div>
					</div>
					<p className={styles.pizzaDescription}>{description}</p>
				</div>
				<div className={styles.pizzaActions}>
					<button type="button" className={styles.viewButton} aria-label={t('View breadsticks')}>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isBreadsticksModalOpen && !isProductInfoModalOpen && (
				<BreadsticksModal
					name={name}
					description={description}
					price={price}
					image={image}
					freeIngredients={freeIngredients}
					freeIngredientsLimit={freeIngredientsLimit}
					onClose={closeBreadsticksModal}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsBreadsticksModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default BreadsticksItem;
