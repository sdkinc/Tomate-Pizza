import { useState } from 'react';
import { FrenchFriesSizes, ProductInfo, SauceOption } from './type/FrenchFriesTypes';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pizza-items/pizzaItem.module.css';

import { useTranslation } from 'react-i18next';
import FrenchFriesModal from './FrenchFriesModal';
import ProductInfoModal from '../pizza-items/ProductInfoModal';

interface FrenchFriesItemProps {
	name: string;
	description?: string; // Optional description
	image: string;
	sizes: FrenchFriesSizes[];
	sauces: SauceOption[];
	productInfo?: ProductInfo;
}

const FrenchFriesItem: React.FC<FrenchFriesItemProps> = ({
	name,
	description,
	image,
	sizes,
	sauces,
	productInfo,
}) => {
	const { t } = useTranslation();
	const [isFrenchFriesModalOpen, setIsFrenchFriesModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openFrenchFriesModal = (): void => setIsFrenchFriesModalOpen(true);
	const closeFrenchFriesModal = (): void => setIsFrenchFriesModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					// Ensure modal opens only when the product info modal is not active
					openFrenchFriesModal();
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
							<p className={styles.pizzaPrice}>{sizes[0].price} €</p>
						</div>
					</div>
					<p className={styles.pizzaDescription}>{description}</p>
				</div>
				<div className={styles.pizzaActions}>
					<button type="button" className={styles.viewButton} aria-label={t('View French Fries')}>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isFrenchFriesModalOpen && !isProductInfoModalOpen && (
				<FrenchFriesModal
					name={name}
					description={description}
					sizes={sizes}
					onClose={closeFrenchFriesModal}
					image={image}
					sauces={sauces || []}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsFrenchFriesModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default FrenchFriesItem;
