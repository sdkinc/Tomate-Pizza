import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pizza-items/pizzaItem.module.css';
import { useTranslation } from 'react-i18next';
import NonAlcoholicDrinksModal from './NonAlcoholicDrinksModal';
import { ProductInfo } from './type/NonAlcoholicDrinksTypes';
import ProductInfoModal from './ProductInfoModal';

interface NonAlcoholicDrinksItemProps {
	name: string;
	description: string;
	image: string;
	price: number;
	productInfo?: ProductInfo;
}

const NonAlcoholicDrinksItem: React.FC<NonAlcoholicDrinksItemProps> = ({
	name,
	description,
	image,
	price,
	productInfo,
}) => {
	const { t } = useTranslation();
	const [isNonAlcoholicDrinksModalOpen, setIsNonAlcoholicDrinksModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openNonAlcoholicDrinksModal = (): void => setIsNonAlcoholicDrinksModalOpen(true);
	const closeNonAlcoholicDrinksModal = (): void => setIsNonAlcoholicDrinksModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					openNonAlcoholicDrinksModal();
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
						aria-label={t('View Non-alcoholic drinks')}
					>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isNonAlcoholicDrinksModalOpen && !isProductInfoModalOpen && (
				<NonAlcoholicDrinksModal
					name={name}
					description={description}
					price={price}
					image={image}
					onClose={closeNonAlcoholicDrinksModal}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsNonAlcoholicDrinksModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default NonAlcoholicDrinksItem;
