import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pizza-items/pizzaItem.module.css';
import { useTranslation } from 'react-i18next';
import { ProductInfo } from './type/AlcoholicDrinksTypes';
import ProductInfoModal from '../non-alcoholic-drinks/ProductInfoModal';
import AlcoholicDrinksModal from './AlcoholicDrinksModal';

interface AlcoholicDrinksItemProps {
	name: string;
	description: string;
	image: string;
	price: number;
	productInfo?: ProductInfo;
}

const AlcoholicDrinksItem: React.FC<AlcoholicDrinksItemProps> = ({
	name,
	description,
	image,
	price,
	productInfo,
}) => {
	const { t } = useTranslation();
	const [isAlcoholicDrinksModalOpen, setIsAlcoholicDrinksModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openAlcoholicDrinksModal = (): void => setIsAlcoholicDrinksModalOpen(true);
	const closeAlcoholicDrinksModal = (): void => setIsAlcoholicDrinksModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					openAlcoholicDrinksModal();
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
					<button
						type="button"
						className={styles.viewButton}
						aria-label={t('View alcoholic drinks')}
					>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isAlcoholicDrinksModalOpen && !isProductInfoModalOpen && (
				<AlcoholicDrinksModal
					name={name}
					description={description}
					price={price}
					image={image}
					onClose={closeAlcoholicDrinksModal}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsAlcoholicDrinksModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default AlcoholicDrinksItem;
