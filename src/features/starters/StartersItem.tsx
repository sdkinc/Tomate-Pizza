import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../pizza-items/pizzaItem.module.css';

import ProductInfoModal from '../pizza-items/ProductInfoModal';
import { useTranslation } from 'react-i18next';
import StartersModal from './StartersModal';
import { ProductInfo } from './type/StartersType';

interface StartersItemProps {
	name: string;
	description?: string;
	image: string;
	price: number;
	productInfo?: ProductInfo;
}

const StartersItem: React.FC<StartersItemProps> = ({
	name,
	description,
	image,
	price,
	productInfo,
}) => {
	const { t } = useTranslation();
	const [isStartersModalOpen, setIsStartersModalOpen] = useState(false);
	const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);

	const openStartersModal = (): void => setIsStartersModalOpen(true);
	const closeStartersModal = (): void => setIsStartersModalOpen(false);

	const openProductInfoModal = (): void => setIsProductInfoModalOpen(true);
	const closeProductInfoModal = (): void => setIsProductInfoModalOpen(false);

	return (
		<div
			className={styles.pizzaItem}
			onClick={() => {
				if (!isProductInfoModalOpen) {
					openStartersModal();
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
					<button type="button" className={styles.viewButton} aria-label={t('View starter')}>
						<VisibilityIcon fontSize="medium" />
					</button>
				</div>
			</div>

			{isStartersModalOpen && !isProductInfoModalOpen && (
				<StartersModal
					name={name}
					description={description || ''}
					onClose={closeStartersModal}
					image={image}
					price={price}
				/>
			)}

			{isProductInfoModalOpen && productInfo && (
				<ProductInfoModal
					isOpen={isProductInfoModalOpen}
					onClose={() => {
						closeProductInfoModal();
						setIsStartersModalOpen(false);
					}}
					productInfo={productInfo}
				/>
			)}
		</div>
	);
};

export default StartersItem;
