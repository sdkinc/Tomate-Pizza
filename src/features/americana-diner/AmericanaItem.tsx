import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pizza-items/pizzaItem.module.css';

import ProductInfoModal from '../pizza-items/ProductInfoModal';
import { useTranslation } from 'react-i18next';
import { ProductInfo } from './type/AmericanaTypes';
import AmericanaModal from './AmericanaModal';

interface AmericanaItemProps {
	name: string;
	description: string;
	image: string;
	price: number;
	productInfo?: ProductInfo;
}

const AmericanaItem: React.FC<AmericanaItemProps> = ({
	name,
	description,
	image,
	price,
	productInfo,
}) => {
	const { t } = useTranslation();
	const [isAmericanaModalOpen, setIsAmericanaModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openAmericanaModal = (): void => setIsAmericanaModalOpen(true);
	const closeAmericanaModal = (): void => setIsAmericanaModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					openAmericanaModal();
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
						aria-label={t('View americana diner')}
					>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isAmericanaModalOpen && !isProductInfoModalOpen && (
				<AmericanaModal
					name={name}
					description={description}
					price={price}
					image={image}
					onClose={closeAmericanaModal}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsAmericanaModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default AmericanaItem;
